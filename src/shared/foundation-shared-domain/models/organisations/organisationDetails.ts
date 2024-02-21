import { PermissionInfos, PermissionInfosDTO } from "../permissions/permissionInfos";
import { OrganisationInfos, OrganisationInfosDTO } from "./organisationInfos";
import { DashboardType } from "../enums/dashboardEnums";

export class OrganisationDetails extends OrganisationInfos {
    organisationTypeId: string;
    mainDashboardId?: string;
    mainDashboardType: DashboardType;
    adminId: string;
    adminName: string;
    description: string;
    locationsCount: number;
    deviceOrganisationsCount: number;
    permissions: PermissionInfos[];

    constructor(params: OrganisationDetailsDTO) {
        super(params);

        this.organisationTypeId = params.organisationTypeId;
        this.mainDashboardType = params.mainDashboardType;
        this.mainDashboardId = params.mainDashboardId;
        this.adminId = params.adminId;
        this.adminName = params.adminName;
        this.description = params.description;
        this.locationsCount = params.locationsCount;
        this.deviceOrganisationsCount = params.deviceOrganisationsCount;
        this.permissions = params.permissions.map(dto => new PermissionInfos(dto));
    }
}

export interface OrganisationDetailsDTO extends OrganisationInfosDTO {
    organisationTypeId: string;
    mainDashboardId?: string;
    mainDashboardType: DashboardType;
    adminId: string;
    adminName: string;
    description: string;
    locationsCount: number;
    deviceOrganisationsCount: number;
    permissions: PermissionInfosDTO[];
}

export interface CreateOrganisationDTO {
    organisationTypeId: string;
    legalInformationId: string;
    administratorTimeZoneId: string;
    administratorFirstName: string;
    admninistratorLastName: string;
    administratorEmail: string;
    administratorPhoneNumber: string;
    acceptGeneralConditions: boolean;
    acceptPrivacyPolicy: boolean;
    label: string;
    description: string;
}

export interface UpdateOrganisationDTO {
    imageId?: string;
    image?: string;
    label: string;
    description: string;
}