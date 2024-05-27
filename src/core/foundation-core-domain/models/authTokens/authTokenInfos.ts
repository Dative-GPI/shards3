import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class AuthTokenInfos {
    id: string;
    userId: string | null;
    label: string;
    creationDate: number;
    dateMax: number;

    constructor(params: AuthTokenInfosDTO) {
        this.id = params.id;
        this.userId = params.userId;
        this.label = params.label;
        this.creationDate = utcToEpoch(params.creationDate);
        this.dateMax = utcToEpoch(params.dateMax);
    }
}

export interface AuthTokenInfosDTO {
    id: string;
    userId: string | null;
    label: string;
    creationDate: string;
    dateMax: string;
}

export interface AuthTokenFilters {
    userId?: string | null;
}