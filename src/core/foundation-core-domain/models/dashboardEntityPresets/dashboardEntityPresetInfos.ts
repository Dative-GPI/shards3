import type { DashboardEntityPresetTranslationDTO } from "./dashboardEntityPresetTranslation";
import { DashboardEntityPresetTranslation } from "./dashboardEntityPresetTranslation";
import type { SelectedEntities } from "../enums/sharedEnums";

export class DashboardEntityPresetInfos {
  hiddenCode: string;
  label: string;
  labelDefault: string;
  singleEntity: boolean;
  selectedEntities: SelectedEntities;
  entitiesFilters: string;
  entitiesIds: string[];
  translations: DashboardEntityPresetTranslation[];

  constructor(params: DashboardEntityPresetInfosDTO) {
    this.hiddenCode = params.hiddenCode;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.singleEntity = params.singleEntity;
    this.selectedEntities = params.selectedEntities;
    this.entitiesFilters = params.entitiesFilters;
    this.entitiesIds = params.entitiesIds.slice();
    this.translations = params.translations.map(t => new DashboardEntityPresetTranslation(t));
  }
}

export interface DashboardEntityPresetInfosDTO {
  hiddenCode: string;
  label: string;
  labelDefault: string;
  singleEntity: boolean;
  selectedEntities: SelectedEntities;
  entitiesFilters: string;
  entitiesIds: string[];
  translations: DashboardEntityPresetTranslationDTO[];
}