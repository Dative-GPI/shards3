import { isoToEpoch } from "../../tools/datesTools";

export class AuthTokenInfos {
  id: string;
  label: string;
  creationDate: number;
  dateMax: number;

  constructor(params: AuthTokenInfosDTO) {
    this.id = params.id;
    this.label = params.label;
    this.creationDate = isoToEpoch(params.creationDate);
    this.dateMax = isoToEpoch(params.dateMax);
  }
}

export interface AuthTokenInfosDTO {
  id: string;
  label: string;
  creationDate: string;
  dateMax: string;
}