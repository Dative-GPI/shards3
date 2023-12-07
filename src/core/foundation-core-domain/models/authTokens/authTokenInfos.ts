export class AuthTokenInfos {
    id: string;
    userId?: string;
    label: string;
    creationDate: number;
    dateMax: number;

    constructor(params: AuthTokenInfosDTO) {
        this.id = params.id;
        this.userId = params.userId;
        this.label = params.label;
        this.creationDate = params.creationDate;
        this.dateMax = params.dateMax;
    }
}

export interface AuthTokenInfosDTO {
    id: string;
    userId?: string;
    label: string;
    creationDate: number;
    dateMax: number;
}

export interface AuthTokenFilters {
    userId?: string;
}