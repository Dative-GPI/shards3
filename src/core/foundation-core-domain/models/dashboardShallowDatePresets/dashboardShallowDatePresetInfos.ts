
export class DashboardShallowDatePresetInfos {
  hiddenCode: string;
  globalStartDate: string;
  globalEndDate: string;

  constructor(params: DashboardShallowDatePresetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.globalStartDate = params.globalStartDate;
    this.globalEndDate = params.globalEndDate;
  }
}

export interface DashboardShallowDatePresetInfosDTO {
  hiddenCode: string;
  globalStartDate: string;
  globalEndDate: string;
}