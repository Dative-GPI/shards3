import { DashboardVariableType } from "@dative-gpi/foundation-shared-domain/models";

export class DashboardVariableInfos {
  id: string;
  dashboardId: string;
  variableType: DashboardVariableType;
  label: string;
  labelDefault: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: { [key: string]: DashboardVariableValueTranslation[] };
  translations: DashboardVariableTranslation[];

  constructor(params: DashboardVariableInfosDTO) {
    this.id = params.id;
    this.dashboardId = params.dashboardId;
    this.variableType = params.variableType;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.defaultValue = params.defaultValue;
    this.useOnlyAllowedValues = params.useOnlyAllowedValues;
    this.allowedValues = { ...params.allowedValues };
    this.translations = params.translations.map(t => new DashboardVariableTranslation(t));
  }
}
  
export interface DashboardVariableInfosDTO {
  id: string;
  dashboardId: string;
  variableType: DashboardVariableType;
  label: string;
  labelDefault: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: { [key: string]: DashboardVariableValueTranslationDTO[] };
  translations: DashboardVariableTranslationDTO[];
}

export class DashboardVariableTranslation {
  languageCode: string;
  label: string;

  constructor(params: DashboardVariableTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface DashboardVariableTranslationDTO {
  languageCode: string;
  label: string;
}

export class DashboardVariableValueTranslation {
  languageCode: string;
  label: string;

  constructor(params: DashboardVariableValueTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface DashboardVariableValueTranslationDTO {
  languageCode: string;
  label: string;
}