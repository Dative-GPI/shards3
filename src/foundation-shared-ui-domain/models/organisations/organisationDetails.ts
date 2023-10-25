import { OrganisationInfos } from "./organisationInfos";

export class OrganisationDetails extends OrganisationInfos {
    label: string;
    userCount: number;
    organisationTypeId: string;
    mainDashboardId?: string;
    description: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    adminId: string;
    adminName: string;
    locationCount: number;
    deviceCount: number;
    mainDashboardOrganisationsIds: string[];
    mainDashboardOrganisationTypesIds: string[];

    constructor(params: OrganisationDetailsDTO) {
        super(params);

        this.organisationTypeId = params.organisationTypeId;
        this.label = params.label;
        this.userCount = params.userCount;
        this.mainDashboardId = params.mainDashboardId;
        this.description = params.description;
        this.imageId = params.imageId;
        this.imageBlurHash = params.imageBlurHash;
        this.imageHeight = params.imageHeight;
        this.imageWidth = params.imageWidth;
        this.adminId = params.adminId;
        this.adminName = params.adminName;
        this.locationCount = params.locationCount;
        this.deviceCount = params.deviceCount;
        this.mainDashboardOrganisationsIds = params.mainDashboardOrganisationsIds.slice();
        this.mainDashboardOrganisationTypesIds = params.mainDashboardOrganisationTypesIds.slice();
    }
}

export interface OrganisationDetailsDTO {
    id: string;
    organisationTypeId: string;
    mainDashboardId?: string;
    label: string;
    userCount: number;
    description: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    adminId: string;
    adminName: string;
    locationCount: number;
    deviceCount: number;
    mainDashboardOrganisationsIds: string[];
    mainDashboardOrganisationTypesIds: string[];
}

export interface CreateOrganisationDTO {
    label: string,
    description: string,
    administratorFirstName: string,
    administratorLastName: string,
    administratorEmail: string,
    administratorPhone: string,
    administratorTimezoneId: string,
    organisationTypeId: string,
    acceptGeneralConditions: boolean,
    acceptPrivacyPolicy: boolean,
    legalInformationId: string,
}

export interface UpdateOrganisationDTO {
    label: string;
    description: string;
    imageId?: string;
    image?: string;
}