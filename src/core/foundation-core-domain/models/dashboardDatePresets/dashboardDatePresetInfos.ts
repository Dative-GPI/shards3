import type { AutoRefresh } from "@dative-gpi/foundation-shared-domain/enums";
import { translate } from "@dative-gpi/foundation-shared-services/tools/translate";

import type { DashboardDatePresetTranslationDTO } from "./dashboardDatePresetTranslation";
import { DashboardDatePresetTranslation } from "./dashboardDatePresetTranslation";

export class DashboardDatePresetInfos {
  hiddenCode: string;
  labelDefault: string;
  startDate: string;
  endDate: string;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
  translations: DashboardDatePresetTranslation[];

  get label() { 
    return translate(this.translations, t => t.label, this.labelDefault) 
  };

  constructor(params: DashboardDatePresetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.labelDefault = params.labelDefault;
    this.startDate = params.startDate;
    this.endDate = params.endDate;
    this.useAutoRefresh = params.useAutoRefresh;
    this.autoRefresh = params.autoRefresh;
    this.translations = params.translations.map(t => new DashboardDatePresetTranslation(t));
  }
}

export interface DashboardDatePresetInfosDTO {
  hiddenCode: string;
  labelDefault: string;
  startDate: string;
  endDate: string;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
  translations: DashboardDatePresetTranslationDTO[];
}