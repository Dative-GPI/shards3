import { DashboardEntityPresetTranslationDTO } from "./dashboardEntityPresetTranslation";
import { SelectedEntities } from "../enums/sharedEnums";

export interface CreateDashboardEntityPresetDTO {
  code: string;
  labelDefault: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];
  translations: DashboardEntityPresetTranslationDTO[];
}