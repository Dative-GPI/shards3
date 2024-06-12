import { AutoRefresh } from "@dative-gpi/foundation-shared-domain/models";

import { CreateDashboardVariableDTO, DashboardVariableInfos, DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardOrganisationTypeInfos, DashboardOrganisationTypeInfosDTO } from "./dashboardOrganisationTypeInfos";
import { DashboardOrganisationTypeTranslationDTO } from "./dashboardOrganisationTypeTranslation";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { CreateWidgetDTO } from "../widgets/widgetDetails";
import { SelectedEntities } from "../enums/sharedEnums";

export class DashboardOrganisationTypeDetails extends DashboardOrganisationTypeInfos {
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
  label: string;
  labelDefault: string;
  code: string;
  icon: string;
  tags: string[];
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
  translations: DashboardOrganisationTypeTranslationDTO[];
}

export interface LockDashboardOrganisationTypeDTO {
  locked: boolean;
}