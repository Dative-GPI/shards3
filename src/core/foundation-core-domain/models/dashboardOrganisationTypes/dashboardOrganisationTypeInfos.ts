import { ApplicationScope } from "../enums/applicationEnums";

export class DashboardOrganisationTypeInfos {
    id: string;
    dashboardId: string;
    organisationTypeId?: string;
    organisationTypeLabel?: string;
    scope: ApplicationScope;
    locked: boolean;
    label: string;
    code: string;
    icon: string;
    tags: string[];

    constructor(params: DashboardOrganisationTypeInfosDTO) {
        this.id = params.id;
        this.dashboardId = params.dashboardId;
        this.organisationTypeId = params.organisationTypeId;
        this.organisationTypeLabel = params.organisationTypeLabel;
        this.scope = params.scope;
        this.locked = params.locked;
        this.label = params.label;
        this.code = params.code;
        this.icon = params.icon;
        this.tags = params.tags.slice();
    }
}

export interface DashboardOrganisationTypeInfosDTO {
    id: string;
    dashboardId: string;
    organisationTypeId?: string;
    organisationTypeLabel?: string;
    scope: ApplicationScope;
    locked: boolean;
    label: string;
    code: string;
    icon: string;
    tags: string[];
}

export interface DashboardOrganisationTypeFilters {
    search?: string;
}