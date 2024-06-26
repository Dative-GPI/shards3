import type { DashboardDatePresetTranslationDTO } from "./dashboardDatePresetTranslation";

export interface CreateDashboardDatePresetDTO {
  hiddenCode: string;
  labelDefault: string;
  globalStartDate: string;
  globalEndDate: string;
  translations: DashboardDatePresetTranslationDTO[];
}