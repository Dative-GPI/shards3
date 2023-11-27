export class OrganisationInfos {
    id: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    label: string;
    userOrganisationsCount: number;

    constructor(params: OrganisationInfosDTO) {
        this.id = params.id;
        this.imageId = params.imageId;
        this.imageBlurHash = params.imageBlurHash;
        this.imageHeight = params.imageHeight;
        this.imageWidth = params.imageWidth;
        this.label = params.label;
        this.userOrganisationsCount = params.userOrganisationsCount;
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
}

export interface OrganisationFilters {
    search?: string;
}