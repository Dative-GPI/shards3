import type { DashboardVariableType } from "@dative-gpi/foundation-shared-domain/models";

import type { DashboardVariableTranslationDTO } from "./dashboardVariableTranslation";
import { DashboardVariableTranslation } from "./dashboardVariableTranslation";
import type { DashboardVariableValueDTO } from "../dashboardVariableValues";
import { DashboardVariableValue } from "../dashboardVariableValues";

export class DashboardVariableInfos {
  hiddenCode: string;
  variableType: DashboardVariableType;
  label: string;
  labelDefault: string;
  code: string;
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
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: DashboardVariableValueDTO[];
  translations: DashboardVariableTranslationDTO[];
}