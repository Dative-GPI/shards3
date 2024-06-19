import { DashboardDatePresetTranslationDTO } from "./dashboardDatePresetTranslation";

export interface CreateDashboardDatePresetDTO {
  labelDefault: string;
  globalStartDate: string;
  globalEndDate: string;
  translations: DashboardDatePresetTranslationDTO[];
}