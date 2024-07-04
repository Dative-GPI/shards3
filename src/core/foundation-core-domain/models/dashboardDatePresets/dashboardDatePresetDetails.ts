import type { DashboardDatePresetTranslationDTO } from "./dashboardDatePresetTranslation";

export interface CreateDashboardDatePresetDTO {
  hiddenCode: string;
  labelDefault: string;
  startDate: string;
  endDate: string;
  useAutoRefresh: boolean;
  autoRefresh: number;
  translations: DashboardDatePresetTranslationDTO[];
}