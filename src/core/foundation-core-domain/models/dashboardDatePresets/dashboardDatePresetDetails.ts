import { DashboardDatePresetTranslationDTO } from "./dashboardDatePresetTranslation";

export interface CreateDashboardDatePresetDTO {
  code: string;
  labelDefault: string;
  globalStartDate: string;
  globalEndDate: string;
  translations: DashboardDatePresetTranslationDTO[];
}