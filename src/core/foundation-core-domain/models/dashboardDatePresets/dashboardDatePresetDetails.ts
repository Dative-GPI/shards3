import type { AutoRefresh } from "@dative-gpi/foundation-shared-domain/enums";

import type { DashboardDatePresetTranslationDTO } from "./dashboardDatePresetTranslation";

export interface CreateDashboardDatePresetDTO {
  hiddenCode: string;
  labelDefault: string;
  startDate: string;
  endDate: string;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
  translations: DashboardDatePresetTranslationDTO[];
}