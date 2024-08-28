import { parse } from "date-fns";

export const ISO_FORMAT: string = "yyyy-MM-dd'T'HH:mm:ss";

export const OPTIONS: { [key: string]: Intl.DateTimeFormatOptions } = {
  shortDate: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  },
  longDate: {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  },
  shortTime: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  },
  longTime: {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  },
  time: {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  },
  shortTimeOnly: {
    hour: "2-digit",
    minute: "2-digit"
  }
};

export const utcToEpoch = (value: string): number => {
  return parse(value.substring(0, 19) + "Z", ISO_FORMAT + "X", new Date()).getTime();
};

const BASE = ["now"];
const WIDGET = ["from", "to"];
const ALERT = ["alert", "alertstart", "alertend"];

const fromExpression = (expression: string, variant: 'default' | 'before-after'): boolean => {
  if (
    /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}(:\d{2})?$/g.test(expression) ||
    /^\d{4}-\d{2}-\d{2}[ |T]\d{2}:\d{2}(:\d{2})?$/g.test(expression)
  ) {
    if (!isNaN(Date.parse(expression))) {
      return true;
    }
  }
  let variables = BASE.slice();
  switch (variant) {
    case "default": {
      variables = variables.concat(WIDGET);
      break;
    }
    case "before-after": {
      variables = variables.concat(ALERT);
      break;
    }
  }
  variables = variables.sort((a: string, b: string) => b.length - a.length);
  for (let i = 0; i < variables.length; i++) {
    if (expression.startsWith(variables[i])) {
      expression = expression.substring(variables[i].length).replaceAll(" ", "");
    }
  }
  let match = /^(?:(?:([-+])(\d*))?(\w+))?(?:\/(\w))?/g.exec(expression);
  while (match != null && !(match[0] == null || (match[0].match(/^ *$/) !== null))) {
    let doSomething = false;
    if (!(match[1] == null || (match[1].match(/^ *$/) !== null)) && !(match[3] == null || (match[3].match(/^ *$/) !== null))) {
      if (!["-", "+"].includes(match[1])) {
        return false
      }
      if (!variables.includes(match[3])) {
        if (isNaN(parseInt(match[2])) || !["s", "m", "h", "d", "w", "M", "y"].includes(match[3])) {
          return false;
        }
      }
      doSomething = true;
    }
    if (!(match[4] == null || (match[4].match(/^ *$/) !== null))) {
      if (!["s", "m", "h", "d", "w", "M", "y"].includes(match[4])) {
        return false;
      }
      doSomething = true;
    }
    if (!doSomething) {
      return false;
    }
    expression = expression.substring(match[0].length);
    match = /(?:(?:([-+])(\d*))?(\w+))?(?:\/(\w))?/g.exec(expression);
  }
  if (expression.length) {
    return false;
  }
  return true;
};

export const validateExpression = (expression: string, variant: "default" | "before-after"): boolean => {
  return (fromExpression(expression!, variant));
};