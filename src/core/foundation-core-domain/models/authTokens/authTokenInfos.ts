import { DatesTools } from "@dative-gpi/foundation-shared-services/tools";

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
        this.creationDate = DatesTools.utcToEpoch(params.creationDate);
        this.dateMax = DatesTools.utcToEpoch(params.dateMax);
    }
}

export interface AuthTokenInfosDTO {
    id: string;
    userId?: string;
    label: string;
    creationDate: string;
    dateMax: string;
}

export interface AuthTokenFilters {
    userId?: string;
}