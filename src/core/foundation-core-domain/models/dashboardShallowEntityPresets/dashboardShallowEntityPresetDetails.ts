import { SelectedEntities } from "../enums/sharedEnums";

export interface CreateDashboardShallowEntityPresetDTO {
  hiddenCode: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];
}