export class ManufacturerInfos {
    id: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    label: string;
    
    constructor(params: ManufacturerInfosDTO) {
        this.id = params.id;
        this.imageId = params.imageId;
        this.imageBlurHash = params.imageBlurHash;
        this.imageHeight = params.imageHeight;
        this.imageWidth = params.imageWidth;
        this.label = params.label;
    }
}

export interface ManufacturerInfosDTO {
    id: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    label: string;
}

export interface ManufacturerFilters {
    search?: string;
}