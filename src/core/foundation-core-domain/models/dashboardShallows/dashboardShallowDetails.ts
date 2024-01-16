import { DashboardShallowInfos, DashboardShallowInfosDTO } from "./dashboardShallowInfos";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { PathCrumb, PathCrumbDTO } from "../shared/pathCrumb";
import { SelectedEntities } from "../enums/sharedEnums";
import { AutoRefresh } from "../enums/dashboardEnums";

export class DashboardShallowDetails extends DashboardShallowInfos {
  path: PathCrumb[];
  overrideSingleEntity?: boolean;
  overrideDynamicEntities?: boolean;
  overrideGlobalSelectedEntities?: SelectedEntities;
  overrideGlobalEntitiesIds?: string[];
  overrideDynamicDates?: boolean;
  overrideGlobalStartDate?: string;
  overrideGlobalEndDate?: string;
  overrideUseAutoRefresh?: boolean;
  overrideAutoRefresh?: AutoRefresh;
  singleEntity: boolean;
  dynamicEntities: boolean;
  globalSelectedEntities: SelectedEntities;
  globalEntitiesIds: string[];
  dynamicDates: boolean;
  globalStartDate: string;
  globalEndDate: string;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
  widgets: WidgetInfos[];

  constructor(params: DashboardShallowDetailsDTO) {
    super(params);

    this.path = params.path.map(dto => new PathCrumb(dto)).sort((a, b) => b.index - a.index);
    this.overrideSingleEntity = params.overrideSingleEntity;
    this.overrideDynamicEntities = params.overrideDynamicEntities;
    this.overrideGlobalSelectedEntities = params.overrideGlobalSelectedEntities;
    this.overrideGlobalEntitiesIds = params.overrideGlobalEntitiesIds?.slice();
    this.overrideDynamicDates = params.overrideDynamicDates;
    this.overrideGlobalStartDate = params.overrideGlobalStartDate;
    this.overrideGlobalEndDate = params.overrideGlobalEndDate;
    this.overrideUseAutoRefresh = params.overrideUseAutoRefresh;
    this.overrideAutoRefresh = params.overrideAutoRefresh;
    this.singleEntity = params.singleEntity;
    this.dynamicEntities = params.dynamicEntities;
    this.globalSelectedEntities = params.globalSelectedEntities;
    this.globalEntitiesIds = params.globalEntitiesIds.slice();
    this.dynamicDates = params.dynamicDates;
    this.globalStartDate = params.globalStartDate;
    this.globalEndDate = params.globalEndDate;
    this.useAutoRefresh = params.useAutoRefresh;
    this.autoRefresh = params.autoRefresh;
    this.widgets = params.widgets.map(dto => new WidgetInfos(dto));
  }
}

export interface DashboardShallowDetailsDTO extends DashboardShallowInfosDTO {
    path: PathCrumbDTO[];
    overrideSingleEntity?: boolean;
    overrideDynamicEntities?: boolean;
    overrideGlobalSelectedEntities?: SelectedEntities;
    overrideGlobalEntitiesIds?: string[];
    overrideDynamicDates?: boolean;
    overrideGlobalStartDate?: string;
    overrideGlobalEndDate?: string;
    overrideUseAutoRefresh?: boolean;
    overrideAutoRefresh?: number;
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
    widgets: WidgetInfosDTO[];
}

export interface CreateDashboardShallowDTO {
    dashboardOrganisationTypeId: string;
}

export interface UpdateDashboardShallowDTO {
    folderId?: string;
    label: string;
    code: string;
    icon: string;
    tags: string[];
    overrideSingleEntity?: boolean;
    overrideDynamicEntities?: boolean;
    overrideGlobalSelectedEntities?: SelectedEntities;
    overrideGlobalEntitiesIds?: string[];
    overrideDynamicDates?: boolean;
    overrideGlobalStartDate?: string;
    overrideGlobalEndDate?: string;
    overrideUseAutoRefresh?: boolean;
    overrideAutoRefresh?: number;
}

export interface ChangeDashboardShallowFolderDTO {
    folderId?: string;
}