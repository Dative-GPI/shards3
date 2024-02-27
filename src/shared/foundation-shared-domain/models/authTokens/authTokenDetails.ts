import { AuthTokenInfos, AuthTokenInfosDTO } from "./authTokenInfos";

export class AuthTokenDetails extends AuthTokenInfos {
    constructor(params: AuthTokenDetailsDTO) {
        super(params);
    }
}

export interface AuthTokenDetailsDTO extends AuthTokenInfosDTO {
}

export interface CreateAuthTokenDTO {
    userId: string;
    lifetime: number;
}