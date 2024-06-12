import { AutoRefresh } from "@dative-gpi/foundation-shared-domain/models";

import { DashboardVariableInfos, DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardShallowInfos, DashboardShallowInfosDTO } from "./dashboardShallowInfos";
import { DashboardTranslation, DashboardTranslationDTO } from "../dashboards";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { PathCrumb, PathCrumbDTO } from "../shared/pathCrumb";
import { SelectedEntities } from "../enums/sharedEnums";

export class DashboardShallowDetails extends DashboardShallowInfos {
  labelDefault: string;
  path: PathCrumb[];
  overrideSingleEntity: boolean | null;
  overrideDynamicEntities: boolean | null;
  overrideGlobalSelectedEntities: SelectedEntities | null;
  overrideGlobalEntitiesIds: string[] | null;
  overrideDynamicDates: boolean | null;
  overrideGlobalStartDate: string | null;
  overrideGlobalEndDate: string | null;
  overrideUseAutoRefresh: boolean | null;
  overrideAutoRefresh: AutoRefresh | null;
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

  constructor(params: DashboardShallowDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.path = params.path.map(dto => new PathCrumb(dto)).sort((a, b) => b.index - a.index);
    this.overrideSingleEntity = params.overrideSingleEntity;
    this.overrideDynamicEntities = params.overrideDynamicEntities;
    this.overrideGlobalSelectedEntities = params.overrideGlobalSelectedEntities;
    this.overrideGlobalEntitiesIds = params.overrideGlobalEntitiesIds ?
      params.overrideGlobalEntitiesIds.slice() : null;
    this.overrideDynamicDates = params.overrideDynamicDates;
    this.overrideGlobalStartDate = params.overrideGlobalStartDate;
    this.overrideGlobalEndDate = params.overrideGlobalEndDate;
    this.overrideUseAutoRefresh = params.overrideUseAutoRefresh;
    this.overrideAutoRefresh = params.overrideAutoRefresh;
    this.translations = params.translations.map(t => new DashboardTranslation(t));
    this.singleEntity = params.singleEntity;
    this.dynamicEntities = params.dynamicEntities;
    this.globalSelectedEntities = params.globalSelectedEntities;
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

export interface DashboardShallowDetailsDTO extends DashboardShallowInfosDTO {
  labelDefault: string;
  path: PathCrumbDTO[];
  overrideSingleEntity: boolean | null;
  overrideDynamicEntities: boolean | null;
  overrideGlobalSelectedEntities: SelectedEntities | null;
  overrideGlobalEntitiesIds: string[] | null;
  overrideDynamicDates: boolean | null;
  overrideGlobalStartDate: string | null;
  overrideGlobalEndDate: string | null;
  overrideUseAutoRefresh: boolean | null;
  overrideAutoRefresh: number | null;
  translations: DashboardTranslationDTO[];
  dashboardId: string;
  scope: number;
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

export interface CreateDashboardShallowDTO {
  dashboardOrganisationTypeId: string;
}

export interface UpdateDashboardShallowDTO {
  folderId: string | null;
  imageId: string | null;
  image: string | null;
  labelDefault: string;
  code: string;
  icon: string;
  tags: string[];
  overrideSingleEntity: boolean | null;
  overrideDynamicEntities: boolean | null;
  overrideGlobalSelectedEntities: SelectedEntities | null;
  overrideGlobalEntitiesIds: string[] | null;
  overrideDynamicDates: boolean | null;
  overrideGlobalStartDate: string | null;
  overrideGlobalEndDate: string | null;
  overrideUseAutoRefresh: boolean | null;
  overrideAutoRefresh: number | null;
  translations: DashboardTranslationDTO[];
}

export interface ChangeDashboardShallowFolderDTO {
  folderId: string | null;
}