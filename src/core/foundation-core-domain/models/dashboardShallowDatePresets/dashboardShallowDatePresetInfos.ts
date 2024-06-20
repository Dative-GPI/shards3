
export class DashboardShallowDatePresetInfos {
  code: string;
  globalStartDate: string;
  globalEndDate: string;

  constructor(params: DashboardShallowDatePresetInfosDTO) {
    this.code = params.code;
    this.globalStartDate = params.globalStartDate;
    this.globalEndDate = params.globalEndDate;
  }
}

export interface DashboardShallowDatePresetInfosDTO {
  code: string;
  globalStartDate: string;
  globalEndDate: string;
}