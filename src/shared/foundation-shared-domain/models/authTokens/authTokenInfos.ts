import { DatesTools } from "@dative-gpi/foundation-shared-services/tools";

export class AuthTokenInfos {
    id?: string;
    token: string;
    dateMax?: number;

    constructor(params: AuthTokenInfosDTO) {
        this.id = params.id;
        this.token = params.token;
        this.dateMax = params?.dateMax ? DatesTools.utcToEpoch(params.dateMax) : undefined;
    }
}

export interface AuthTokenInfosDTO {
    id?: string;
    token: string;
    dateMax?: string;
}