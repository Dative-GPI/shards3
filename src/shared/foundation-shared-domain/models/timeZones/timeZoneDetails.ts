import { TimeZoneInfos, TimeZoneInfosDTO } from "./timeZoneInfos";

export class TimeZoneDetails extends TimeZoneInfos {
    constructor(params: TimeZoneDetailsDTO) {
        super(params);
    }
}

export interface TimeZoneDetailsDTO extends TimeZoneInfosDTO {
}