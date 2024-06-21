import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";
import { CustomPropertyInfos, FilterType, PropertyDataType } from "../../../foundation-core-domain/models";

const { getUserOffsetMillis, getMachineOffsetMillis } = useAppTimeZone();

export const getColor = (property: CustomPropertyInfos, value: string): string | undefined => {
    if (property.colorful) {
        for (const color of [...property.colorMap].sort((a, b) => b.priority - a.priority)) {
            let filterValues = [...color.filterValues];
            if ([PropertyDataType.DateTime].includes(property.dataType)) {
                filterValues = filterValues.map(fv => getEpoch(fv));
            }
            switch (color.filterType) {
                case FilterType.None: return color.color;
                case FilterType.Equal: {
                    if (filterValues.includes(value)) {
                        return color.color;
                    }
                    break;
                }
                case FilterType.More: {
                    if (!isNaN(parseFloat(value))) {
                        if (filterValues.some(fv => !isNaN(parseFloat(fv)) && parseFloat(fv) < parseFloat(value))) {
                            return color.color;
                        }
                    }
                    break;
                }
                case FilterType.Less: {
                    if (!isNaN(parseFloat(value))) {
                        if (filterValues.some(fv => !isNaN(parseFloat(fv)) && parseFloat(fv) > parseFloat(value))) {
                            return color.color;
                        }
                    }
                    break;
                }
                case FilterType.MoreOrEqual: {
                    if (!isNaN(parseFloat(value))) {
                        if (filterValues.some(fv => !isNaN(parseFloat(fv)) && parseFloat(fv) <= parseFloat(value))) {
                            return color.color;
                        }
                    }
                    break;
                }
                case FilterType.LessOrEqual: {
                    if (!isNaN(parseFloat(value))) {
                        if (filterValues.some(fv => !isNaN(parseFloat(fv)) && parseFloat(fv) >= parseFloat(value))) {
                            return color.color;
                        }
                    }
                    break;
                }
                case FilterType.Different: {
                    if (!filterValues.includes(value)) {
                        return color.color;
                    }
                    break;
                }
                case FilterType.Contains: {
                    if (filterValues.some(fv => value.includes(fv))) {
                        return color.color;
                    }
                    break;
                }
                case FilterType.StartsWith: {
                    if (filterValues.some(fv => value.startsWith(fv))) {
                        return color.color;
                    }
                    break;
                }
                case FilterType.EndsWith: {
                    if (filterValues.some(fv => value.endsWith(fv))) {
                        return color.color;
                    }
                    break;
                }
            }
        }
    }
}

const getEpoch = (expression: string): string => {
    if (!isNaN(parseInt(expression))) {
        return expression;
    }

    const date = new Date();
    if (expression.startsWith("now")) {
        expression = expression.substring(3).replace(/\s/g, "");
    }
    else {
        return (date.getTime()).toString();
    }
    let match = /^(?:(?:([-+])(\d*))?(\w+))?(?:\/(\w))?/g.exec(expression);
    while (match != null && (match[0] != null && match[0].length > 0)) {
        if (match[1] != null && match[3] != null) {
            if (!["-", "+"].includes(match[1]) || isNaN(parseInt(match[2])) || !["s", "m", "h", "d", "w", "M", "y"].includes(match[3])) {
                return (date.getTime()).toString();
            }
            const offset = match[1] == "-" ? -1 * parseInt(match[2]): 1* parseInt(match[2]);
            switch (match[3]) {
                case "s": {
                    date.setSeconds(date.getSeconds() + offset);
                    break;
                }
                case "m": {
                    date.setMinutes(date.getMinutes() + offset);
                    break;
                }
                case "h": {
                    date.setHours(date.getHours() + offset);
                    break;
                }
                case "d": {
                    date.setDate(date.getDate() + offset);
                    break;
                }
                case "w": {
                    date.setDate(date.getDate() + offset * 7);
                    break;
                }
                case "M": {
                    date.setMonth(date.getMonth() + offset);
                    break;
                }
                case "y": {
                    date.setFullYear(date.getFullYear() + offset);
                    break;
                }
            }
        }
        if (match[4] != null) {
            if (!["s", "m", "h", "d", "w", "M", "y"].includes(match[4])) {
                return (date.getTime()).toString();
            }
            switch (match[4]) {
                case "s": {
                    date.setMilliseconds(0);
                    break;
                }
                case "m": {
                    date.setMilliseconds(0);
                    date.setSeconds(0);
                    break;
                }
                case "h": {
                    date.setMilliseconds(0);
                    date.setSeconds(0);
                    date.setMinutes(0);
                    break;
                }
                case "d": {
                    date.setMilliseconds(0);
                    date.setSeconds(0);
                    date.setMinutes(0);
                    date.setHours(0);
                    break;
                }
                case "w": {
                    date.setMilliseconds(0);
                    date.setSeconds(0);
                    date.setMinutes(0);
                    date.setHours(0);
                    date.setDate(date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1));
                    break;
                }
                case "M": {
                    date.setMilliseconds(0);
                    date.setSeconds(0);
                    date.setMinutes(0);
                    date.setHours(0);
                    date.setDate(1);
                    break;
                }
                case "y": {
                    date.setMilliseconds(0);
                    date.setSeconds(0);
                    date.setMinutes(0);
                    date.setHours(0);
                    date.setDate(1);
                    date.setMonth(0);
                    break;
                }
            }
        }
        expression = expression.substring(match[0].length);
        match = /(?:(?:([-+])(\d*))?(\w+))?(?:\/(\w))?/g.exec(expression);
    }
    return (date.getTime() + getMachineOffsetMillis() - getUserOffsetMillis()).toString();
}