import { CreateDashboardVariableValueDTO } from "../dashboardVariableValues";

export interface CreateDashboardShallowVariableDTO {
  code: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: CreateDashboardVariableValueDTO[];
}