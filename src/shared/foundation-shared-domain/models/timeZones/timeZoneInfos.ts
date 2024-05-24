export class TimeZoneInfos {
    id: string;
    offset: string;

    constructor(params: TimeZoneInfosDTO) {
        this.id = params.id;
        this.offset = params.offset;
    }
}

export interface TimeZoneInfosDTO {
    id: string;
    offset: string;
}

export interface TimeZoneFilters {
    search?: string | null;
}