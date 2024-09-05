import type { ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";

export class DashboardOrganisationTypeInfos {
  id: string;
  dashboardId: string;
  organisationTypeId: string | null;
  organisationTypeLabel: string | null;
  scope: ApplicationScope;
  imageId: string | null;
  locked: boolean;
  label: string;
  code: string;
  icon: string;
  tags: string[];
  colors: string[];

  constructor(params: DashboardOrganisationTypeInfosDTO) {
    this.id = params.id;
    this.dashboardId = params.dashboardId;
    this.organisationTypeId = params.organisationTypeId;
    this.organisationTypeLabel = params.organisationTypeLabel;
    this.imageId = params.imageId;
    this.scope = params.scope;
    this.locked = params.locked;
    this.label = params.label;
    this.code = params.code;
    this.icon = params.icon;
    this.tags = params.tags.slice();
    this.colors = params.colors.slice();
  }
}

export interface DashboardOrganisationTypeInfosDTO {
  id: string;
  dashboardId: string;
  organisationTypeId: string | null;
  organisationTypeLabel: string | null;
  imageId: string | null;
  scope: ApplicationScope;
  locked: boolean;
  label: string;
  code: string;
  icon: string;
  tags: string[];
  colors: string[];
}

export interface DashboardOrganisationTypeFilters {
  dashboardOrganisationTypeIds?: string[] | null;
  search?: string | null;
}