import { PermissionInfos, PermissionInfosDTO } from "@dative-gpi/foundation-shared-domain/models";

import { ServiceAccountInfos, ServiceAccountInfosDTO } from "./serviceAccountInfos";
import { RoleType } from "../enums/roleEnums";

export class ServiceAccountDetails extends ServiceAccountInfos {
  languageCode: string;
  timeZoneId: string;
  permissions: PermissionInfos[];

  constructor(params: ServiceAccountDetailsDTO) {
    super(params);
    
    this.languageCode = params.languageCode;
    this.timeZoneId = params.timeZoneId;
    this.permissions = params.permissions.map(dto => new PermissionInfos(dto));
  }
}

export interface ServiceAccountDetailsDTO extends ServiceAccountInfosDTO {
  languageCode: string;
  timeZoneId: string;
  permissions: PermissionInfosDTO[];
}

export interface CreateServiceAccountDTO {
  roleType: RoleType;
  roleId?: string;
  languageCode: string;
  timeZoneId: string;
  image?: string;
  label: string;
  description: string;
  tags: string[];
}

export interface UpdateServiceAccountDTO {
  roleType: RoleType;
  roleId?: string;
  languageCode: string;
  timeZoneId: string;
  imageId?: string;
  image?: string;
  label: string;
  description: string;
  tags: string[];
}