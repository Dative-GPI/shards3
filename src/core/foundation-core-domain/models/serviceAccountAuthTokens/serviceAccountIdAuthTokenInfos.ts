import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class ServiceAccountAuthTokenInfos {
    id: string;
    serviceAccountId: string | null;
    label: string;
    creationDate: number;
    dateMax: number;

    constructor(params: ServiceAccountAuthTokenInfosDTO) {
        this.id = params.id;
        this.serviceAccountId = params.serviceAccountId;
        this.label = params.label;
        this.creationDate = utcToEpoch(params.creationDate);
        this.dateMax = utcToEpoch(params.dateMax);
    }
}

export interface ServiceAccountAuthTokenInfosDTO {
    id: string;
    serviceAccountId: string | null;
    label: string;
    creationDate: string;
    dateMax: string;
}

export interface ServiceAccountAuthTokenFilters {
}