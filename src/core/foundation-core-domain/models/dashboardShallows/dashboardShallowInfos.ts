import { ApplicationScope } from "../enums/applicationEnums";

export class DashboardShallowInfos {
    id: string;
    organisationId: string;
    dashboardOrganisationTypeId: string;
    dashboardOrganisationTypeLabel: string;
    folderId: string | null;
    folderLabel: string | null;
    folderIcon: string | null;
    label: string;
    code: string;
    icon: string;
    tags: string[];
    colors: string[];
    dashboardId: string;
    scope: ApplicationScope;

    constructor(params: DashboardShallowInfosDTO) {
        this.id = params.id;
        this.organisationId = params.organisationId;
        this.dashboardOrganisationTypeId = params.dashboardOrganisationTypeId;
        this.dashboardOrganisationTypeLabel = params.dashboardOrganisationTypeLabel;
        this.folderId = params.folderId;
        this.folderLabel = params.folderLabel;
        this.folderIcon = params.folderIcon;
        this.label = params.label;
        this.code = params.code;
        this.icon = params.icon;
        this.tags = params.tags.slice();
        this.colors = params.colors.slice();
        this.dashboardId = params.dashboardId;
        this.scope = params.scope;
    }
}

export interface DashboardShallowInfosDTO {
    id: string;
    organisationId: string;
    dashboardOrganisationTypeId: string;
    dashboardOrganisationTypeLabel: string;
    folderId: string | null;
    folderLabel: string | null;
    folderIcon: string | null;
    label: string;
    code: string;
    icon: string;
    tags: string[];
    colors: string[];
    dashboardId: string;
    scope: ApplicationScope;
}

export interface DashboardShallowFilters {
    root: boolean | null;
    folderId: string | null;
    search: string | null;
}