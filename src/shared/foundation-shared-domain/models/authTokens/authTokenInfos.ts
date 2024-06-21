import { utcToEpoch } from "../../tools";

export class AuthTokenInfos {
  id: string;
  label: string;
  creationDate: number;
  dateMax: number;

  constructor(params: AuthTokenInfosDTO) {
    this.id = params.id;
    this.label = params.label;
    this.creationDate = utcToEpoch(params.creationDate);
    this.dateMax = utcToEpoch(params.dateMax);
  }
}

export interface AuthTokenInfosDTO {
  id: string;
  label: string;
  creationDate: string;
  dateMax: string;
}