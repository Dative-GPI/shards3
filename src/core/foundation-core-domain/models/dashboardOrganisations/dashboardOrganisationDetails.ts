import { AutoRefresh } from "@dative-gpi/foundation-shared-domain/models";

import { DashboardOrganisationInfos, DashboardOrganisationInfosDTO } from "./dashboardOrganisationInfos";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { PathCrumb, PathCrumbDTO } from "../shared/pathCrumb";
import { CreateWidgetDTO } from "../widgets/widgetDetails";
import { SelectedEntities } from "../enums/sharedEnums";

export class DashboardOrganisationDetails extends DashboardOrganisationInfos {
    path: PathCrumb[];
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

    constructor(params: DashboardOrganisationDetailsDTO) {
        super(params);

        this.path = params.path.map(dto => new PathCrumb(dto)).sort((a, b) => b.index - a.index);
        this.singleEntity = params.singleEntity;
        this.dynamicEntities = params.dynamicEntities;
        this.globalSelectedEntities = params.globalSelectedEntities as SelectedEntities;
        this.globalEntitiesIds = params.globalEntitiesIds.slice();
        this.dynamicDates = params.dynamicDates;
        this.globalStartDate = params.globalStartDate;
        this.globalEndDate = params.globalEndDate;
        this.useAutoRefresh = params.useAutoRefresh;
        this.autoRefresh = params.autoRefresh;
        this.widgets = params.widgets.map(dto => new WidgetInfos(dto));
    }
}

export interface DashboardOrganisationDetailsDTO extends DashboardOrganisationInfosDTO {
    path: PathCrumbDTO[];
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

export interface CreateDashboardOrganisationDTO {
    folderId: string | null;
    image: string | null;
    label: string;
    code: string;
    icon: string;
    tags: string[];
}

export interface UpdateDashboardOrganisationDTO {
    folderId: string | null;
    label: string;
    code: string;
    icon: string;
    imageId: string | null;
    image: string | null;
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
    widgets: CreateWidgetDTO[];
}

export interface LockDashboardOrganisationDTO {
    locked: boolean;
}

export interface ChangeDashboardOrganisationFolderDTO {
    folderId: string | null;
}