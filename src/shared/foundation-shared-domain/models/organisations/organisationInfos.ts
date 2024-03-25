export class OrganisationInfos {
    id: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    label: string;
    userOrganisationsCount: number;
    adminId?: string;
    adminName?: string;

    constructor(params: OrganisationInfosDTO) {
        this.id = params.id;
        this.imageId = params.imageId;
        this.imageBlurHash = params.imageBlurHash;
        this.imageHeight = params.imageHeight;
        this.imageWidth = params.imageWidth;
        this.label = params.label;
        this.userOrganisationsCount = params.userOrganisationsCount;
        this.adminId = params.adminId;
        this.adminName = params.adminName;
    }
}

export interface OrganisationInfosDTO {
    id: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    label: string;
    userOrganisationsCount: number;
    adminId?: string;
    adminName?: string;
}

export interface OrganisationFilters {
    search?: string;
}