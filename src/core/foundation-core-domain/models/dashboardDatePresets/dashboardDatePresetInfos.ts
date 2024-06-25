import type { DashboardDatePresetTranslationDTO } from "./dashboardDatePresetTranslation";
import { DashboardDatePresetTranslation } from "./dashboardDatePresetTranslation";

export class DashboardDatePresetInfos {
  hiddenCode: string;
  label: string;
  labelDefault: string;
  globalStartDate: string;
  globalEndDate: string;
  translations: DashboardDatePresetTranslation[];

  constructor(params: DashboardDatePresetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.globalStartDate = params.globalStartDate;
    this.globalEndDate = params.globalEndDate;
    this.translations = params.translations.map(t => new DashboardDatePresetTranslation(t));
  }
}

export interface DashboardDatePresetInfosDTO {
  hiddenCode: string;
  label: string;
  labelDefault: string;
  globalStartDate: string;
  globalEndDate: string;
  translations: DashboardDatePresetTranslationDTO[];
}