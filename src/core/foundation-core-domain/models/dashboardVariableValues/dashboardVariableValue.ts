import { DashboardVariableValueTranslation, DashboardVariableValueTranslationDTO } from "./dashboardVariableValueTranslation";

export class DashboardVariableValue {
  value: string;
  label: string;
  labelDefault: string;
  translations: DashboardVariableValueTranslation[];

  constructor(params: DashboardVariableValueDTO) {
    this.value = params.value;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.translations = params.translations.map(t => new DashboardVariableValueTranslation(t));
  }
}

export interface DashboardVariableValueDTO {
  value: string;
  label: string;
  labelDefault: string;
  translations: DashboardVariableValueTranslationDTO[];
}

export interface CreateDashboardVariableValueDTO {
  value: string;
  labelDefault: string;
  translations: DashboardVariableValueTranslationDTO[];
}