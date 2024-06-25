import type { DashboardEntityPresetTranslationDTO } from "./dashboardEntityPresetTranslation";
import type { SelectedEntities } from "../enums/sharedEnums";

export interface CreateDashboardEntityPresetDTO {
  hiddenCode: string;
  labelDefault: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];
  translations: DashboardEntityPresetTranslationDTO[];
}