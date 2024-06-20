import { SelectedEntities } from "../enums/sharedEnums";

export interface CreateDashboardShallowEntityPresetDTO {
  code: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];
}