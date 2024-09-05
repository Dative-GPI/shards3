import { PermissionInfos, type PermissionInfosDTO } from "@dative-gpi/foundation-shared-domain/models";

import { type ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";
import { type UserType } from "@dative-gpi/foundation-shared-domain/enums";

export class RoleOrganisationTypeInfos {
  id: string;
  roleId: string;
  organisationTypeId: string;
  organisationTypeLabel: string;
  scope: ApplicationScope;
  userType: UserType;
  icon: string;
  code: string;
  label: string;
  tags: string[];
  permissions: PermissionInfos[];

  constructor(params: RoleOrganisationTypeInfosDTO) {
    this.id = params.id;
    this.roleId = params.roleId;
    this.organisationTypeId = params.organisationTypeId;
    this.organisationTypeLabel = params.organisationTypeLabel;
    this.scope = params.scope;
    this.userType = params.userType;
    this.scope = params.scope;
    this.userType = params.userType;
    this.icon = params.icon;
    this.code = params.code;
    this.label = params.label;
    this.tags = params.tags.slice();
    this.permissions = params.permissions.map(dto => new PermissionInfos(dto));
  }
}

export interface RoleOrganisationTypeInfosDTO {
  id: string;
  roleId: string;
  organisationTypeId: string;
  organisationTypeLabel: string;
  scope: ApplicationScope;
  userType: UserType;
  icon: string;
  code: string;
  label: string;
  tags: string[];
  permissions: PermissionInfosDTO[];
}

export interface RoleOrganisationTypeFilters {
  search?: string | null;
}