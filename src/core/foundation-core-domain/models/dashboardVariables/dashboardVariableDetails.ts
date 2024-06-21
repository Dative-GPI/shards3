import { DashboardVariableType } from "@dative-gpi/foundation-shared-domain/models";

import { DashboardVariableTranslationDTO } from "./dashboardVariableTranslation";
import { CreateDashboardVariableValueDTO } from "../dashboardVariableValues";

export interface CreateDashboardVariableDTO {
  hiddenCode: string;
  variableType: DashboardVariableType;
  labelDefault: string;
  code: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: CreateDashboardVariableValueDTO[];
  translations: DashboardVariableTranslationDTO[];
}