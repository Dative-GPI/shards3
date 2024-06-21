import { ServiceAccountOrganisationAuthTokenInfos, ServiceAccountOrganisationAuthTokenInfosDTO } from "./serviceAccountOrganisationIdAuthTokenInfos";

export class ServiceAccountOrganisationAuthTokenDetails extends ServiceAccountOrganisationAuthTokenInfos {
    token: string;

    constructor(params: ServiceAccountOrganisationAuthTokenDetailsDTO) {
        super(params);
        this.token = params.token;
    }
}

export interface ServiceAccountOrganisationAuthTokenDetailsDTO extends ServiceAccountOrganisationAuthTokenInfosDTO {
    token: string;
}

export interface CreateServiceAccountOrganisationAuthTokenDTO {
    serviceAccountOrganisationId?: string;
    label?: string;
    lifetime?: number;
}