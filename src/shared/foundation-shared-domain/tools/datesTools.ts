import { parse } from "date-fns";

const removeArtifacts = (date: string): string => {
    return date.substring(0, 19) + "Z";
};

const isoTimeFormat = (timeZone: boolean = false): string => {
    return `yyyy-MM-dd'T'HH:mm:ss${timeZone ? "X" : ""}`;
};

export const DatesTools =  {
    utcToEpoch: (value: string): number => {
        return parse(removeArtifacts(value), isoTimeFormat(true), new Date()).getTime();
    }
};