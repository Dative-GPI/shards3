import type { DashboardVariableType } from "@dative-gpi/foundation-shared-domain/models";

import type { DashboardVariableTranslationDTO } from "./dashboardVariableTranslation";
import type { CreateDashboardVariableValueDTO } from "../dashboardVariableValues";

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