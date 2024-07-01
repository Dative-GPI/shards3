import type { DashboardEntityPresetTranslationDTO } from "./dashboardEntityPresetTranslation";
import type { SelectedEntities } from "../enums/sharedEnums";

export interface CreateDashboardEntityPresetDTO {
  hiddenCode: string;
  labelDefault: string;
  singleEntity: boolean;
  selectedEntities: SelectedEntities;
  entitiesFilters: string;
  entitiesIds: string[];
  translations: DashboardEntityPresetTranslationDTO[];
}