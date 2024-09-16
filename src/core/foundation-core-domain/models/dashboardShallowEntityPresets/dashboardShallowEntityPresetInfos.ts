import type { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

export class DashboardShallowEntityPresetInfos {
  hiddenCode: string;
  singleEntity: boolean;
  entityType: EntityType;
  entitiesFilters: string;
  entitiesIds: string[];

  constructor(params: DashboardShallowEntityPresetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.singleEntity = params.singleEntity;
    this.entityType = params.entityType;
    this.entitiesFilters = params.entitiesFilters;
    this.entitiesIds = params.entitiesIds.slice();
  }
}

export interface DashboardShallowEntityPresetInfosDTO {
  hiddenCode: string;
  singleEntity: boolean;
  entityType: EntityType;
  entitiesFilters: string;
  entitiesIds: string[];
}