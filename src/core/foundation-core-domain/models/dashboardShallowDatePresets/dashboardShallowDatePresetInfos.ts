import type { AutoRefresh } from "@/shared/foundation-shared-domain/enums";

export class DashboardShallowDatePresetInfos {
  hiddenCode: string;
  startDate: string;
  endDate: string;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;

  constructor(params: DashboardShallowDatePresetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.startDate = params.startDate;
    this.endDate = params.endDate;
    this.useAutoRefresh = params.useAutoRefresh;
    this.autoRefresh = params.autoRefresh;
  }
}

export interface DashboardShallowDatePresetInfosDTO {
  hiddenCode: string;
  startDate: string;
  endDate: string;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
}