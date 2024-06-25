import type { DashboardVariableValueDTO } from "../dashboardVariableValues";
import { DashboardVariableValue } from "../dashboardVariableValues";

export class DashboardShallowVariableInfos {
  hiddenCode: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: DashboardVariableValue[];

  constructor(params: DashboardShallowVariableInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.defaultValue = params.defaultValue;
    this.useOnlyAllowedValues = params.useOnlyAllowedValues;
    this.allowedValues = params.allowedValues.map(dto => new DashboardVariableValue(dto));
  }
}
  
export interface DashboardShallowVariableInfosDTO {
  hiddenCode: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: DashboardVariableValueDTO[];
}