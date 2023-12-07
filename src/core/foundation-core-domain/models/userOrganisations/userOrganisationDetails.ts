import { UserOrganisationInfos, UserOrganisationInfosDTO } from "./userOrganisationInfos";
import { PermissionInfos, PermissionInfosDTO } from "../permissions/permissionInfos";
import { DashboardType } from "../enums/dashboardEnums";
import { RoleType } from "../enums/roleEnums";

export class UserOrganisationDetails extends UserOrganisationInfos {
    mainDashboardType: DashboardType;
    mainDashboardId?: string;
    mainDashboardLabel: string;
    languageCode: string;
    timeZoneId: string;
    permissions: PermissionInfos[];

    constructor(params: UserOrganisationDetailsDTO) {
        super(params);
        
        this.mainDashboardType = params.mainDashboardType as DashboardType;
        this.mainDashboardId = params.mainDashboardId;
        this.mainDashboardLabel = params.mainDashboardLabel;
        this.languageCode = params.languageCode;
        this.timeZoneId = params.timeZoneId;
        this.permissions = params.permissions.map(dto => new PermissionInfos(dto));
    }
}

export interface UserOrganisationDetailsDTO extends UserOrganisationInfosDTO {
    mainDashboardType: DashboardType;
    mainDashboardId?: string;
    mainDashboardLabel: string;
    languageCode: string;
    timeZoneId: string;
    permissions: PermissionInfosDTO[];
}

export interface CreateUserOrganisationDTO {
    roleType: RoleType;
    roleId?: string;
    languageCode: string;
    timeZoneId: string;
    image?: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    tags: string[];
}

export interface CreateServiceUserOrganisationDTO {
    roleType: RoleType;
    roleId?: string;
    languageCode: string;
    timeZoneId: string;
    image?: string;
    label: string;
    description: string;
    tags: string[];
}

export interface UpdateUserOrganisationDTO {
    roleType: RoleType;
    roleId?: string;
    mainDashboardType: DashboardType;
    mainDashboardId?: string;
    tags: string[];
}

export interface ChangeUserOrganisationDashboardDTO {
    mainDashboardType: DashboardType;
    mainDashboardId?: string;
}