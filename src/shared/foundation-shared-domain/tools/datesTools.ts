import { addDays, addMilliseconds, format, parse } from "date-fns";
import { FormTools } from ".";
import { LanguageDetails, TimeZoneInfos } from "../models";
import { StructureLevel } from "../models/";

const removeArtifacts = (date: string): string => {
    return date.substring(0, 19) + "Z";
};

const isoTimeFormat = (timeZone: boolean = false): string => {
    return `yyyy-MM-dd'T'HH:mm:ss${timeZone ? "X" : ""}`;
};

export const shortTimeFormat = (): string => {
    const storage = localStorage.getItem("language");
    if (!FormTools.isNullOrSpaces(storage)) {
        const language: LanguageDetails = JSON.parse(storage!);
        switch (language.code) {
            case "fr-FR": return "dd/MM/yy HH:mm:ss";
            case "es-ES": return "dd/MM/yy HH:mm:ss";
            case "it-IT": return "dd/MM/yy HH:mm:ss";
            case "en-GB": return "dd/MM/yy HH:mm:ss";
            case "de-DE": return "dd/MM/yy HH:mm:ss";
            case "ru-RU": return "dd/MM/yy HH:mm:ss";
            default: return "MM/dd/yy HH:mm";
        }
    }
    return "MM/dd/yy HH:mm";
}

export const machineOffset = (): number => {
    return -(new Date()).getTimezoneOffset() * 60 * 1000;
}

export const userOffset = (hours: boolean = false): number => {
    let offset = 0;
    let storage = localStorage.getItem("timezone");
    if (!FormTools.isNullOrSpaces(storage)) {
        let timeZone: TimeZoneInfos = JSON.parse(storage!);
        let cleaned = timeZone.offset.replaceAll(" ", "").toLowerCase();
        switch (cleaned) {
            case "utc-11:00:00": offset = -11; break;
            case "utc-10:00:00": offset = -10; break;
            case "utc-09:00:00": offset = -9; break;
            case "utc-08:00:00": offset = -8; break;
            case "utc-07:00:00": offset = -7; break;
            case "utc-06:00:00": offset = -6; break;
            case "utc-05:00:00": offset = -5; break;
            case "utc-04:00:00": offset = -4; break;
            case "utc-03:00:00": offset = -3; break;
            case "utc-02:00:00": offset = -2; break;
            case "utc-01:00:00": offset = -1; break;
            case "utc+01:00:00": offset = +1; break;
            case "utc+02:00:00": offset = +2; break;
            case "utc+03:00:00": offset = +3; break;
            case "utc+04:00:00": offset = +4; break;
            case "utc+05:00:00": offset = +5; break;
            case "utc+06:00:00": offset = +6; break;
            case "utc+07:00:00": offset = +7; break;
            case "utc+08:00:00": offset = +8; break;
            case "utc+09:00:00": offset = +9; break;
            case "utc+10:00:00": offset = +10; break;
            case "utc+11:00:00": offset = +11; break;
            case "utc+12:00:00": offset = +12; break;
            case "utc+13:00:00": offset = +13; break;
            case "utc+14:00:00": offset = +14; break;
        }
    }
    return hours ? offset : offset * 60 * 60 * 1000;
}

const BASE = ["now"];
const WIDGET = ["from", "to"];
const ALERT = ["alert", "alertstart", "alertend"];

const fromExpression = (expression: string, structureLevel: StructureLevel | undefined): boolean => {
    if (
        /^\d{2}\/\d{2}\/\d{4} \d{2}\:\d{2}(\:\d{2})?$/g.test(expression) ||
        /^\d{4}-\d{2}-\d{2}[ |T]\d{2}\:\d{2}(\:\d{2})?$/g.test(expression)
    ) {
        if (!isNaN(Date.parse(expression))) {
            return true;
        }
    }
    let variables = BASE.slice();
    switch (structureLevel) {
        case StructureLevel.OrganisationWidget:
        case StructureLevel.OrganisationTypeWidget:
        case StructureLevel.GroupWidget: {
            variables = variables.concat(WIDGET);
            break;
        }
        case StructureLevel.AlertDashboard: {
            variables = variables.concat(ALERT);
            break;
        }
        case StructureLevel.AlertWidget: {
            variables = variables.concat(WIDGET).concat(ALERT);
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

    parseForPicker: (value: string | undefined, dateFormat: string = isoTimeFormat()): number | null => {
        if (FormTools.isNullOrSpaces(value)) {
            return null;
        }
        let date = parse(value!, dateFormat, new Date());
        date = addMilliseconds(date, userOffset());
        if (!isFinite(date.getTime())) {
            return null;
        }
        return date.getTime();
    },
    formatCurrentForPicker: (daysOffset: number = -1): string => {
        let date = new Date();
        date.setSeconds(0, 0);
        date = addMilliseconds(addDays(date, daysOffset), -machineOffset());
        return format(date, isoTimeFormat());
    },
    formatFromPicker: (date: number | null): string => {
        if (date != null) {
            let epoch = date - machineOffset() + (machineOffset() - userOffset());
            return format(epoch, isoTimeFormat());
        }
        return "";
    },
    validateExpression: (expression: string | null | undefined, structureLevel: StructureLevel | undefined): boolean => {
        return (!FormTools.isNullOrSpaces(expression) && fromExpression(expression!, structureLevel));
    },
};