import type { DashboardVariableType } from "@dative-gpi/foundation-shared-domain/models";

import { DashboardVariableTranslation, type DashboardVariableTranslationDTO } from "./dashboardVariableTranslation";
import { DashboardVariableValue, type DashboardVariableValueDTO } from "../dashboardVariableValues";

export class DashboardVariableInfos {
  hiddenCode: string;
  variableType: DashboardVariableType;
  label: string;
  labelDefault: string;
  code: string;
  value: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: DashboardVariableValue[];
  translations: DashboardVariableTranslation[];

  constructor(params: DashboardVariableInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.variableType = params.variableType;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.code = params.code;
    this.value = params.value;
    this.defaultValue = params.defaultValue;
    this.useOnlyAllowedValues = params.useOnlyAllowedValues;
    this.allowedValues = params.allowedValues.map(dto => new DashboardVariableValue(dto));
    this.translations = params.translations.map(t => new DashboardVariableTranslation(t));
  }
}
  
export interface DashboardVariableInfosDTO {
  hiddenCode: string;
  variableType: DashboardVariableType;
  label: string;
  labelDefault: string;
  code: string;
  value: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: DashboardVariableValueDTO[];
  translations: DashboardVariableTranslationDTO[];
}