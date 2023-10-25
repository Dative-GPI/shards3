export class OrganisationInfos {
    id: string;
    label: string;
    userCount: number;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;

    constructor(params: OrganisationInfosDTO) {
        this.id = params.id;
        this.label = params.label;
        this.userCount = params.userCount;
        this.imageId = params.imageId;
        this.imageBlurHash = params.imageBlurHash;
        this.imageHeight = params.imageHeight;
        this.imageWidth = params.imageWidth;
    }
}

export interface OrganisationInfosDTO {
    id: string;
    label: string;
    userCount: number;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
}

export interface OrganisationFilters {
    search?: string;
}