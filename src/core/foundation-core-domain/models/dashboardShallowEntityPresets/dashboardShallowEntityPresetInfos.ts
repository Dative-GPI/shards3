import type { SelectedEntities } from "../enums/sharedEnums";

export class DashboardShallowEntityPresetInfos {
  hiddenCode: string;
  singleEntity: boolean;
  selectedEntities: SelectedEntities;
  entitiesFilters: string;
  entitiesIds: string[];

  constructor(params: DashboardShallowEntityPresetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.singleEntity = params.singleEntity;
    this.selectedEntities = params.selectedEntities;
    this.entitiesFilters = params.entitiesFilters;
    this.entitiesIds = params.entitiesIds.slice();
  }
}

export interface DashboardShallowEntityPresetInfosDTO {
  hiddenCode: string;
  singleEntity: boolean;
  selectedEntities: SelectedEntities;
  entitiesFilters: string;
  entitiesIds: string[];
}