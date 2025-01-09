import { useAppTimeZone } from './app/useAppTimeZone';
import { useDateFormat } from '@dative-gpi/foundation-shared-services/composables/useDateFormat';

export const useTermFieldDate = () => {
  const { getOffsetDifference } = useAppTimeZone();
  const { parseForPicker } = useDateFormat();

  const EXPRESSION = /(?:(?:([-\+])(\d*))?(\w+))?(?:\/(\w))?/g;
  const NOW = 'now';

  const convert = (value: string, variables: { [key: string]: number | string } = {}): number => {
    //Try to convert the value to a date
    const date = parseForPicker(value);
    if (date) {
      return date;
    }

    const currentVariables = {
      ...variables,
      [NOW]: new Date().getTime()
    };

    return applyFormula(value, currentVariables);
  }

  const applyFormula = (expression: string, variables: { [key: string]: number | string }): number => {
    expression = expression.replace(/\s/g, '');
    const matches = expression.matchAll(EXPRESSION);    

    if (!matches) {
      console.error('Invalid expression');
      return NaN;
    }

    let timestamp = 0;

    // Retrieving group in order are: operator (+ or -), number, unit, and special (variable)
    matches.forEach(match => {
      const operator = match[1];
      const number = match[2];
      const unit = match[3];
      const special = match[4];

      if (unit) {
        timestamp = applyUnit(timestamp, operator, number, unit, variables);
      }

      if (special) {
        timestamp = applySpecial(timestamp, special);
      }
    });

    return timestamp;
  }

  const applyUnit = (timestamp: number, operator: string, number: string, unit: string, variables: { [key: string]: number | string }): number => {
    let factor = operator === '-' ? -1 : 1;
    factor *= Number.isNaN(parseInt(number)) ? 1 : parseInt(number);

    switch (unit) {
      case 's':
        return timestamp + factor * 1000;
      case 'm':
        return timestamp + factor * 60 * 1000;
      case 'h':
        return timestamp + factor * 60 * 60 * 1000;
      case 'd':
        return new Date(timestamp).setDate(new Date(timestamp).getDate() + factor)
      case 'w':
        return new Date(timestamp).setDate(new Date(timestamp).getDate() + factor * 7);
      case 'M':
        return new Date(timestamp).setMonth(new Date(timestamp).getMonth() + factor);
      case 'y':
        return new Date(timestamp).setFullYear(new Date(timestamp).getFullYear() + factor);
      default:
        if(variables[unit]) {
          const variableValue = getVariableValue(unit, variables);
          return timestamp + factor * variableValue;
        }
        else {
          console.error(`Invalid unit expression, unit ${unit} is not defined in the variables`);
          return timestamp;
        }
    }
  }

  const getVariableValue = (unit: string, variables: { [key: string]: number | string }): number => {
    if(variables[unit]) {
      const variableValue = parseInt(variables[unit].toString());
      if (typeof variables[unit] === 'number') {
        return variableValue;
      } else if (!isNaN(variableValue)) {
        return variableValue;
      } else {
        const variableExpression = variables[unit].toString();
        const variableValue = applyFormula(variableExpression, variables);
        if (!isNaN(variableValue)) {
          return variableValue;
        } else {
          console.error(`Invalid unit expression, unit ${unit} is not defined in the variables`);
          return 0;
        }
      }
    }
    else {
      console.error(`Invalid unit expression, unit ${unit} is not defined in the variables`);
      return 0;
    }
  }

  const applySpecial = (timestamp: number, special: string): number => {    
    timestamp += getOffsetDifference(timestamp);
    switch (special) {
      case "h":
        return new Date(timestamp).setMinutes(0, 0, 0) - getOffsetDifference(timestamp);
      case "d":
        return new Date(timestamp).setHours(0, 0, 0, 0) - getOffsetDifference(timestamp);
      case "w":
        const date = new Date(timestamp);
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff)).setHours(0, 0, 0, 0) - getOffsetDifference(timestamp);
      case "M":
        const dateM = new Date(timestamp);
        return new Date(dateM.setMonth(dateM.getMonth(), 1)).setHours(0, 0, 0, 0) - getOffsetDifference(timestamp);
      case "y":
        const dateY = new Date(timestamp);
        return new Date(dateY.setMonth(0, 1)).setHours(0, 0, 0, 0) - getOffsetDifference(timestamp);
      default:
        break;
    }
    return timestamp;
  }

  return {
    convert
  }
}