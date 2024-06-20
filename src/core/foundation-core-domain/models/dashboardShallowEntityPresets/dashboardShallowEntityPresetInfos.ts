import { SelectedEntities } from "../enums/sharedEnums";

export class DashboardShallowEntityPresetInfos {
  code: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];

  constructor(params: DashboardShallowEntityPresetInfosDTO) {
    this.code = params.code;
    this.globalSelectedEntities = params.globalSelectedEntities;
    this.globalEntitiesFilters = params.globalEntitiesFilters;
    this.globalEntitiesIds = params.globalEntitiesIds.slice();
  }
}

export interface DashboardShallowEntityPresetInfosDTO {
  code: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];
}