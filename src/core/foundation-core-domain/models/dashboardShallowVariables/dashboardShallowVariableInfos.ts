export class DashboardShallowVariableInfos {
  hiddenCode: string;
  value: string;

  constructor(params: DashboardShallowVariableInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.value = params.value;
  }
}
  
export interface DashboardShallowVariableInfosDTO {
  hiddenCode: string;
  value: string;
}