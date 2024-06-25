import type { SelectedEntities } from "../enums/sharedEnums";

export class DashboardShallowEntityPresetInfos {
  hiddenCode: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];

  constructor(params: DashboardShallowEntityPresetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.globalSelectedEntities = params.globalSelectedEntities;
    this.globalEntitiesFilters = params.globalEntitiesFilters;
    this.globalEntitiesIds = params.globalEntitiesIds.slice();
  }
}

export interface DashboardShallowEntityPresetInfosDTO {
  hiddenCode: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];
}