import { DashboardVariableType } from "@dative-gpi/foundation-shared-domain/models";

import { DashboardVariableValueTranslation, DashboardVariableValueTranslationDTO } from "./dashboardVariableValueTranslation";
import { DashboardVariableTranslation, DashboardVariableTranslationDTO } from "./dashboardVariableTranslation";

export class DashboardVariableInfos {
  id: string;
  dashboardId: string;
  variableType: DashboardVariableType;
  label: string;
  labelDefault: string;
  code: string;
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
    this.code = params.code;
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
  code: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: { [key: string]: DashboardVariableValueTranslationDTO[] };
  translations: DashboardVariableTranslationDTO[];
}