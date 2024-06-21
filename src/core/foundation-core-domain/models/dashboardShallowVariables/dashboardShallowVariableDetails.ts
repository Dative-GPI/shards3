import { CreateDashboardVariableValueDTO } from "../dashboardVariableValues";

export interface CreateDashboardShallowVariableDTO {
  hiddenCode: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: CreateDashboardVariableValueDTO[];
}