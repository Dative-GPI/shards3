import { DashboardVariableValueTranslationDTO } from "../dashboardVariables/dashboardVariableValueTranslation";

export interface CreateDashboardShallowVariableDTO {
  code: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: { [key: string]: DashboardVariableValueTranslationDTO[] };
}