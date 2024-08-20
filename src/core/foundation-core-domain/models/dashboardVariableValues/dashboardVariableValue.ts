import { translate } from "@/shared/foundation-shared-services/tools";

import type { DashboardVariableValueTranslationDTO } from "./dashboardVariableValueTranslation";
import { DashboardVariableValueTranslation } from "./dashboardVariableValueTranslation";

export class DashboardVariableValue {
  value: string;
  labelDefault: string;
  translations: DashboardVariableValueTranslation[];

  get label() { 
    return translate(this.translations, t => t.label, this.labelDefault) 
  };

  constructor(params: DashboardVariableValueDTO) {
    this.value = params.value;
    this.labelDefault = params.labelDefault;
    this.translations = params.translations.map(t => new DashboardVariableValueTranslation(t));
  }
}

export interface DashboardVariableValueDTO {
  value: string;
  labelDefault: string;
  translations: DashboardVariableValueTranslationDTO[];
}

export interface CreateDashboardVariableValueDTO {
  value: string;
  labelDefault: string;
  translations: DashboardVariableValueTranslationDTO[];
}