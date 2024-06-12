import { ApplicationScope } from "../enums/applicationEnums";

export class DashboardOrganisationTypeInfos {
  id: string;
  dashboardId: string;
  organisationTypeId: string | null;
  organisationTypeLabel: string | null;
  scope: ApplicationScope;
  imageId: string | null;
  locked: boolean;
  label: string;
  labelDefault: string;
  code: string;
  icon: string;
  tags: string[];
  colors: string[];
  translations: DashboardOrganisationTypeTranslation[];

  constructor(params: DashboardOrganisationTypeInfosDTO) {
    this.id = params.id;
    this.dashboardId = params.dashboardId;
    this.organisationTypeId = params.organisationTypeId;
    this.organisationTypeLabel = params.organisationTypeLabel;
    this.imageId = params.imageId;
    this.scope = params.scope;
    this.locked = params.locked;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.code = params.code;
    this.icon = params.icon;
    this.tags = params.tags.slice();
    this.colors = params.colors.slice();
    this.translations = params.translations.map(dto => new DashboardOrganisationTypeTranslation(dto));
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
  labelDefault: string;
  code: string;
  icon: string;
  tags: string[];
  colors: string[];
  translations: DashboardOrganisationTypeTranslationDTO[];
}

export interface DashboardOrganisationTypeFilters {
  search?: string | null;
}

export class DashboardOrganisationTypeTranslation {
  languageCode: string;
  label: string;

  constructor(params: DashboardOrganisationTypeTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface DashboardOrganisationTypeTranslationDTO {
  languageCode: string;
  label: string;
}