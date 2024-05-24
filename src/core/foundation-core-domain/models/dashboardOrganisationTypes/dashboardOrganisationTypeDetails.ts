import { DashboardOrganisationTypeInfos, DashboardOrganisationTypeInfosDTO } from "./dashboardOrganisationTypeInfos";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { CreateWidgetDTO } from "../widgets/widgetDetails";
import { SelectedEntities } from "../enums/sharedEnums";
import { AutoRefresh } from "../enums/dashboardEnums";

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
    widgets: WidgetInfosDTO[];
}

export interface CreateDashboardOrganisationTypeDTO {
    dashboardOrganisationId: string;
    organisationTypeId: string | null;
}

export interface UpdateDashboardOrganisationTypeDTO {
    label: string;
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
    widgets: CreateWidgetDTO[];
}

export interface LockDashboardOrganisationTypeDTO {
    locked: boolean;
}