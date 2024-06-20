import { DashboardVariableType } from "@dative-gpi/foundation-shared-domain/models";

import { DashboardVariableValueTranslationDTO } from "./dashboardVariableValueTranslation";
import { DashboardVariableTranslationDTO } from "./dashboardVariableTranslation";

export interface CreateDashboardVariableDTO {
  variableType: DashboardVariableType;
  labelDefault: string;
  code: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: { [key: string]: DashboardVariableValueTranslationDTO[] };
  translations: DashboardVariableTranslationDTO[];
}