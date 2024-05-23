import { parse } from "date-fns";
import { FormTools } from ".";

const removeArtifacts = (date: string): string => {
    return date.substring(0, 19) + "Z";
};

export const isoTimeFormat = (timeZone: boolean = false): string => {
    return `yyyy-MM-dd'T'HH:mm:ss${timeZone ? "X" : ""}`;
};


const BASE = ["now"];
const WIDGET = ["from", "to"];
const ALERT = ["alert", "alertstart", "alertend"];

export const fromExpression = (expression: string, variant: 'default' | 'before-after'): boolean => {
    if (
        /^\d{2}\/\d{2}\/\d{4} \d{2}\:\d{2}(\:\d{2})?$/g.test(expression) ||
        /^\d{4}-\d{2}-\d{2}[ |T]\d{2}\:\d{2}(\:\d{2})?$/g.test(expression)
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
    let match = /^(?:(?:([-\+])(\d*))?(\w+))?(?:\/(\w))?/g.exec(expression);
    while (match != null && !FormTools.isNullOrSpaces(match[0])) {
        let doSomething = false;
        if (!FormTools.isNullOrSpaces(match[1]) && !FormTools.isNullOrSpaces(match[3])) {
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
        if (!FormTools.isNullOrSpaces(match[4])) {
            if (!["s", "m", "h", "d", "w", "M", "y"].includes(match[4])) {
                return false;
            }
            doSomething = true;
        }
        if (!doSomething) {
            return false;
        }
        expression = expression.substring(match[0].length);
        match = /(?:(?:([-\+])(\d*))?(\w+))?(?:\/(\w))?/g.exec(expression);
    }
    if (expression.length) {
        return false;
    }
    return true;
}


export const DatesTools = {
    utcToEpoch: (value: string): number => {
        return parse(removeArtifacts(value), isoTimeFormat(true), new Date()).getTime();
    },
};