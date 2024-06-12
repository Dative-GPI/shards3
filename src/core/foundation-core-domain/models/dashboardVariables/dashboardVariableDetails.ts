import { DashboardVariableType } from "@dative-gpi/foundation-shared-domain/models";

import { DashboardVariableInfos, DashboardVariableInfosDTO } from "./dashboardVariableInfos";
import { DashboardVariableValueTranslationDTO } from "./dashboardVariableValueTranslation";
import { DashboardVariableTranslationDTO } from "./dashboardVariableTranslation";

export class DashboardVariableDetails extends DashboardVariableInfos {
  constructor(params: DashboardVariableDetailsDTO) {
    super(params);
  }
}

export interface DashboardVariableDetailsDTO extends DashboardVariableInfosDTO {
}

export interface CreateDashboardVariableDTO {
  variableType: DashboardVariableType;
  labelDefault: string;
  code: string;
  defaultValue: string;
  useOnlyAllowedValues: boolean;
  allowedValues: { [key: string]: DashboardVariableValueTranslationDTO[] };
  translations: DashboardVariableTranslationDTO[];
}