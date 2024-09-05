import type { AutoRefresh } from "@/shared/foundation-shared-domain/enums";

export interface CreateDashboardShallowDatePresetDTO {
  hiddenCode: string;
  startDate: string;
  endDate: string;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
}