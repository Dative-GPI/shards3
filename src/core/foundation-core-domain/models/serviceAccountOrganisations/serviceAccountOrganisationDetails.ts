import { PermissionInfos, type PermissionInfosDTO } from "@dative-gpi/foundation-shared-domain/models";

import { ServiceAccountOrganisationInfos, type ServiceAccountOrganisationInfosDTO } from "./serviceAccountOrganisationInfos";

export class ServiceAccountOrganisationDetails extends ServiceAccountOrganisationInfos {
  languageCode: string;
  timeZoneId: string;
  permissions: PermissionInfos[];

  constructor(params: ServiceAccountOrganisationDetailsDTO) {
    super(params);
    
    this.languageCode = params.languageCode;
    this.timeZoneId = params.timeZoneId;
    this.permissions = params.permissions.map(dto => new PermissionInfos(dto));
  }
}

export interface ServiceAccountOrganisationDetailsDTO extends ServiceAccountOrganisationInfosDTO {
  languageCode: string;
  timeZoneId: string;
  permissions: PermissionInfosDTO[];
}

export interface CreateServiceAccountOrganisationDTO {
  roleId: string | null;
  languageCode: string;
  timeZoneId: string;
  image: string | null;
  label: string;
  description: string;
  tags: string[];
}

export interface UpdateServiceAccountOrganisationDTO {
  roleId: string | null;
  languageCode: string;
  timeZoneId: string;
  imageId: string | null;
  image: string | null;
  label: string;
  description: string;
  tags: string[];
}