import type { AutoRefresh } from "@dative-gpi/foundation-shared-domain/models";

import type { DashboardDatePresetTranslationDTO } from "./dashboardDatePresetTranslation";
import { DashboardDatePresetTranslation } from "./dashboardDatePresetTranslation";

export class DashboardDatePresetInfos {
  hiddenCode: string;
  label: string;
  labelDefault: string;
  startDate: string;
  endDate: string;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
  translations: DashboardDatePresetTranslation[];

  constructor(params: DashboardDatePresetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.label = params.label;
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
  label: string;
  labelDefault: string;
  startDate: string;
  endDate: string;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
  translations: DashboardDatePresetTranslationDTO[];
}