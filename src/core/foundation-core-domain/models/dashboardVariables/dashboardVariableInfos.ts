import type { DashboardVariableType } from "@dative-gpi/foundation-shared-domain/models";

import { DashboardVariableTranslation, type DashboardVariableTranslationDTO } from "./dashboardVariableTranslation";
import { DashboardVariableValue, type DashboardVariableValueDTO } from "../dashboardVariableValues";

import { translate } from "@dative-gpi/foundation-shared-services/tools/translate";

export class DashboardVariableInfos {
  hiddenCode: string;
  variableType: DashboardVariableType;
  labelDefault: string;
  code: string;
  value: string;
  useOnlyAllowedValues: boolean;
  allowedValues: DashboardVariableValue[];
  translations: DashboardVariableTranslation[];
  
  get label() { 
    return translate(this.translations, t => t.label, this.labelDefault) 
  };

  constructor(params: DashboardVariableInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.variableType = params.variableType;
    this.labelDefault = params.labelDefault;
    this.code = params.code;
    this.value = params.value;
    this.useOnlyAllowedValues = params.useOnlyAllowedValues;
    this.allowedValues = params.allowedValues.map(dto => new DashboardVariableValue(dto));
    this.translations = params.translations.map(t => new DashboardVariableTranslation(t));
  }
}
  
export interface DashboardVariableInfosDTO {
  hiddenCode: string;
  variableType: DashboardVariableType;
  labelDefault: string;
  code: string;
  value: string;
  useOnlyAllowedValues: boolean;
  allowedValues: DashboardVariableValueDTO[];
  translations: DashboardVariableTranslationDTO[];
}