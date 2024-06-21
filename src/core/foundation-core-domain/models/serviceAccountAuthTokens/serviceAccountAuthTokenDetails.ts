import { ServiceAccountAuthTokenInfos, ServiceAccountAuthTokenInfosDTO } from "./serviceAccountIdAuthTokenInfos";

export class ServiceAccountAuthTokenDetails extends ServiceAccountAuthTokenInfos {
    token: string;

    constructor(params: ServiceAccountAuthTokenDetailsDTO) {
        super(params);
        this.token = params.token;
    }
}

export interface ServiceAccountAuthTokenDetailsDTO extends ServiceAccountAuthTokenInfosDTO {
    token: string;
}

export interface CreateServiceAccountAuthTokenDTO {
    serviceAccountId?: string;
    label?: string;
    lifetime?: number;
}