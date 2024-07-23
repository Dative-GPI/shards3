import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class ServiceAccountOrganisationAuthTokenInfos {
    id: string;
    serviceAccountOrganisationId: string | null;
    label: string;
    creationDate: number;
    dateMax: number;

    constructor(params: ServiceAccountOrganisationAuthTokenInfosDTO) {
        this.id = params.id;
        this.serviceAccountOrganisationId = params.serviceAccountOrganisationId;
        this.label = params.label;
        this.creationDate = utcToEpoch(params.creationDate);
        this.dateMax = utcToEpoch(params.dateMax);
    }
}

export interface ServiceAccountOrganisationAuthTokenInfosDTO {
    id: string;
    serviceAccountOrganisationId: string | null;
    label: string;
    creationDate: string;
    dateMax: string;
}

export interface ServiceAccountOrganisationAuthTokenFilters {
    active?: boolean;
    minimumSecondDuration?: number;
}