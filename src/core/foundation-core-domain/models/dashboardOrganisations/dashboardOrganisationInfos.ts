import { ApplicationScope } from "../enums/applicationEnums";

export class DashboardOrganisationInfos {
  id: string;
  dashboardId: string;
  organisationId: string;
  folderId: string | null;
  folderLabel: string | null;
  folderIcon: string | null;
  imageId: string | null;
  scope: ApplicationScope;
  locked: boolean;
  label: string;
  code: string;
  icon: string;
  tags: string[];
  colors: string[];

  constructor(params: DashboardOrganisationInfosDTO) {
    this.id = params.id;
    this.dashboardId = params.dashboardId;
    this.organisationId = params.organisationId;
    this.folderId = params.folderId;
    this.folderLabel = params.folderLabel;
    this.folderIcon = params.folderIcon;
    this.imageId = params.imageId;
    this.scope = params.scope;
    this.locked = params.locked;
    this.label = params.label;
    this.code = params.code;
    this.icon = params.icon;
    this.tags = params.tags.slice();
    this.colors = params.colors.slice();
  }
}

export interface DashboardOrganisationInfosDTO {
  id: string;
  dashboardId: string;
  organisationId: string;
  folderId: string | null;
  folderLabel: string | null;
  folderIcon: string | null;
  imageId: string | null;
  scope: ApplicationScope;
  locked: boolean;
  label: string;
  code: string;
  icon: string;
  tags: string[];
  colors: string[];
}

export interface DashboardOrganisationFilters {
  root?: boolean | null;
  folderId?: string | null;
  search?: string | null;
}