import { DashboardDatePresetTranslation, DashboardDatePresetTranslationDTO } from "./dashboardDatePresetTranslation";

export class DashboardDatePresetInfos {
  code: string;
  label: string;
  labelDefault: string;
  globalStartDate: string;
  globalEndDate: string;
  translations: DashboardDatePresetTranslation[];

  constructor(params: DashboardDatePresetInfosDTO) {
    this.code = params.code;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.globalStartDate = params.globalStartDate;
    this.globalEndDate = params.globalEndDate;
    this.translations = params.translations.map(t => new DashboardDatePresetTranslation(t));
  }
}

export interface DashboardDatePresetInfosDTO {
  code: string;
  label: string;
  labelDefault: string;
  globalStartDate: string;
  globalEndDate: string;
  translations: DashboardDatePresetTranslationDTO[];
}