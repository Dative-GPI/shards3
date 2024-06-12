import { AutoRefresh } from "@dative-gpi/foundation-shared-domain/models";

import { CreateDashboardVariableDTO, DashboardVariableInfos, DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardOrganisationTypeInfos, DashboardOrganisationTypeInfosDTO } from "./dashboardOrganisationTypeInfos";
import { DashboardTranslation, DashboardTranslationDTO } from "../dashboards";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { CreateWidgetDTO } from "../widgets/widgetDetails";
import { SelectedEntities } from "../enums/sharedEnums";

export class DashboardOrganisationTypeDetails extends DashboardOrganisationTypeInfos {
  labelDefault: string;
  translations: DashboardTranslation[];
  singleEntity: boolean;
  dynamicEntities: boolean;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesIds: string[];
  dynamicDates: boolean;
  globalStartDate: string;
  globalEndDate: string;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
  variables: DashboardVariableInfos[];
  widgets: WidgetInfos[];

  constructor(params: DashboardOrganisationTypeDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.translations = params.translations.map(t => new DashboardTranslation(t));
    this.singleEntity = params.singleEntity;
    this.dynamicEntities = params.dynamicEntities;
    this.globalSelectedEntities = params.globalSelectedEntities as SelectedEntities;
    this.globalEntitiesIds = params.globalEntitiesIds.slice();
    this.dynamicDates = params.dynamicDates;
    this.globalStartDate = params.globalStartDate;
    this.globalEndDate = params.globalEndDate;
    this.useAutoRefresh = params.useAutoRefresh;
    this.autoRefresh = params.autoRefresh;
    this.variables = params.variables.map(dto => new DashboardVariableInfos(dto));
    this.widgets = params.widgets.map(dto => new WidgetInfos(dto));
  }
}

export interface DashboardOrganisationTypeDetailsDTO extends DashboardOrganisationTypeInfosDTO {
  labelDefault: string;
  translations: DashboardTranslationDTO[];
  singleEntity: boolean;
  dynamicEntities: boolean;
  globalSelectedEntities: number;
  globalEntitiesIds: string[];
  dynamicDates: boolean;
  globalStartDate: string;
  globalEndDate: string;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
  variables: DashboardVariableInfosDTO[];
  widgets: WidgetInfosDTO[];
}

export interface CreateDashboardOrganisationTypeDTO {
  dashboardOrganisationId: string;
  organisationTypeId: string | null;
}

export interface UpdateDashboardOrganisationTypeDTO {
  imageId: string | null;
  image: string | null;
  labelDefault: string;
  code: string;
  icon: string;
  tags: string[];
  translations: DashboardTranslationDTO[];
  singleEntity: boolean;
  dynamicEntities: boolean;
  globalSelectedEntities: number;
  globalEntitiesIds: string[];
  dynamicDates: boolean;
  globalStartDate: string;
  globalEndDate: string;
  useAutoRefresh: boolean;
  autoRefresh: number;
  variables: CreateDashboardVariableDTO[];
  widgets: CreateWidgetDTO[];
}

export interface LockDashboardOrganisationTypeDTO {
  locked: boolean;
}