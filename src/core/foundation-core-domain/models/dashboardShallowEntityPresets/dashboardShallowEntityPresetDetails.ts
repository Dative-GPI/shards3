import type { SelectedEntities } from "../enums/sharedEnums";

export interface CreateDashboardShallowEntityPresetDTO {
  hiddenCode: string;
  singleEntity: boolean;
  selectedEntities: SelectedEntities;
  entitiesFilters: string;
  entitiesIds: string[];
}