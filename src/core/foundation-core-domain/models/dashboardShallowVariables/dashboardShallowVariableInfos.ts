import { DashboardVariableValue, DashboardVariableValueDTO } from "../dashboardVariableValues";

export class DashboardShallowVariableInfos {
  id: string;
  dashboardShallowId: string;
  code: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: DashboardVariableValue[];

  constructor(params: DashboardShallowVariableInfosDTO) {
    this.id = params.id;
    this.dashboardShallowId = params.dashboardShallowId;
    this.code = params.code;
    this.defaultValue = params.defaultValue;
    this.useOnlyAllowedValues = params.useOnlyAllowedValues;
    this.allowedValues = params.allowedValues.map(dto => new DashboardVariableValue(dto));
  }
}
  
export interface DashboardShallowVariableInfosDTO {
  id: string;
  dashboardShallowId: string;
  code: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: DashboardVariableValueDTO[];
}