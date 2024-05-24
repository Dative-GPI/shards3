import { utcToEpoch } from "../../tools";

export class AuthTokenInfos {
  id: string | null;
  token: string;
  dateMax: number | null;

  constructor(params: AuthTokenInfosDTO) {
    this.id = params.id;
    this.token = params.token;
    this.dateMax = params.dateMax ?
      utcToEpoch(params.dateMax) : null;
  }
}

export interface AuthTokenInfosDTO {
  id: string | null;
  token: string;
  dateMax: string | null;
}