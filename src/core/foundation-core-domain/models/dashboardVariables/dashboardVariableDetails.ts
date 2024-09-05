import type { DashboardVariableType } from "@dative-gpi/foundation-shared-domain/enums";

import type { DashboardVariableTranslationDTO } from "./dashboardVariableTranslation";
import type { CreateDashboardVariableValueDTO } from "../dashboardVariableValues";

export interface CreateDashboardVariableDTO {
  hiddenCode: string;
  variableType: DashboardVariableType;
  labelDefault: string;
  code: string;
  value: string;
  useOnlyAllowedValues: boolean;
  allowedValues: CreateDashboardVariableValueDTO[];
  translations: DashboardVariableTranslationDTO[];
}
