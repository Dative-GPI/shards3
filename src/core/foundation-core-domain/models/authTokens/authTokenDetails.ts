import { AuthTokenInfos, AuthTokenInfosDTO } from "./authTokenInfos";

export class AuthTokenDetails extends AuthTokenInfos {
    token: string;

    constructor(params: AuthTokenDetailsDTO) {
        super(params);
        this.token = params.token;
    }
}

export interface AuthTokenDetailsDTO extends AuthTokenInfosDTO {
    token: string;
}

export interface CreateAuthTokenDTO {
    userId: string;
    label: string;
    lifetime: number;
}