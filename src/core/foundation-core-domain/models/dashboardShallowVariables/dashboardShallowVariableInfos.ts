import { DashboardVariableValueTranslation, DashboardVariableValueTranslationDTO } from "../dashboardVariables/dashboardVariableValueTranslation";

export class DashboardShallowVariableInfos {
  id: string;
  dashboardShallowId: string;
  code: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: { [key: string]: DashboardVariableValueTranslation[] };

  constructor(params: DashboardShallowVariableInfosDTO) {
    this.id = params.id;
    this.dashboardShallowId = params.dashboardShallowId;
    this.code = params.code;
    this.defaultValue = params.defaultValue;
    this.useOnlyAllowedValues = params.useOnlyAllowedValues;
    this.allowedValues = { ...params.allowedValues };
  }
}
  
export interface DashboardShallowVariableInfosDTO {
  id: string;
  dashboardShallowId: string;
  code: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: { [key: string]: DashboardVariableValueTranslationDTO[] };
}