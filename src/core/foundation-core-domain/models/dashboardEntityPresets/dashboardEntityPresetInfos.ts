import { DashboardEntityPresetTranslation, DashboardEntityPresetTranslationDTO } from "./dashboardEntityPresetTranslation";
import { SelectedEntities } from "../enums/sharedEnums";

export class DashboardEntityPresetInfos {
  code: string;
  label: string;
  labelDefault: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];
  translations: DashboardEntityPresetTranslation[];

  constructor(params: DashboardEntityPresetInfosDTO) {
    this.code = params.code;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.globalSelectedEntities = params.globalSelectedEntities;
    this.globalEntitiesFilters = params.globalEntitiesFilters;
    this.globalEntitiesIds = params.globalEntitiesIds.slice();
    this.translations = params.translations.map(t => new DashboardEntityPresetTranslation(t));
  }
}

export interface DashboardEntityPresetInfosDTO {
  code: string;
  label: string;
  labelDefault: string;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesFilters: string;
  globalEntitiesIds: string[];
  translations: DashboardEntityPresetTranslationDTO[];
}