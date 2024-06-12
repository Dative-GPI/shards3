import { AutoRefresh } from "@dative-gpi/foundation-shared-domain/models";

import { CreateDashboardVariableDTO, DashboardVariableInfos, DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardOrganisationInfos, DashboardOrganisationInfosDTO } from "./dashboardOrganisationInfos";
import { DashboardTranslation, DashboardTranslationDTO } from "../dashboards";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { PathCrumb, PathCrumbDTO } from "../shared/pathCrumb";
import { CreateWidgetDTO } from "../widgets/widgetDetails";
import { SelectedEntities } from "../enums/sharedEnums";

export class DashboardOrganisationDetails extends DashboardOrganisationInfos {
  labelDefault: string;
  path: PathCrumb[];
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

  constructor(params: DashboardOrganisationDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.path = params.path.map(dto => new PathCrumb(dto)).sort((a, b) => b.index - a.index);
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

export interface DashboardOrganisationDetailsDTO extends DashboardOrganisationInfosDTO {
  labelDefault: string;
  path: PathCrumbDTO[];
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

export interface CreateDashboardOrganisationDTO {
  folderId: string | null;
  image: string | null;
  labelDefault: string;
  code: string;
  icon: string;
  tags: string[];
  translations: DashboardTranslationDTO[];
}

export interface UpdateDashboardOrganisationDTO {
  folderId: string | null;
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

export interface LockDashboardOrganisationDTO {
  locked: boolean;
}

export interface ChangeDashboardOrganisationFolderDTO {
  folderId: string | null;
}