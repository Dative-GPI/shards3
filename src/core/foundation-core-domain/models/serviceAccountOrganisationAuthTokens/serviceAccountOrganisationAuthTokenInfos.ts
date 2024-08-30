import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class ServiceAccountOrganisationAuthTokenInfos {
  id: string;
  serviceAccountOrganisationId: string | null;
  label: string;
  creationDate: number;
  dateMax: number;
  token?: string | null;

  constructor(params: ServiceAccountOrganisationAuthTokenInfosDTO) {
    this.id = params.id;
    this.serviceAccountOrganisationId = params.serviceAccountOrganisationId;
    this.label = params.label;
    this.creationDate = utcToEpoch(params.creationDate);
    this.dateMax = utcToEpoch(params.dateMax);
    this.token = params.token;
  }
}

export interface ServiceAccountOrganisationAuthTokenInfosDTO {
  id: string;
  serviceAccountOrganisationId: string | null;
  label: string;
  creationDate: string;
  dateMax: string;
  token?: string | null;
}

export interface ServiceAccountOrganisationAuthTokenFilters {
  serviceAccountOrganisationId?: string | null;
  active?: boolean | null;
  minimumSecondDuration?: number | null;
}