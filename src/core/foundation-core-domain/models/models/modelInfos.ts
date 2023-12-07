export class ModelInfos {
    id: string;
    manufacturerId: string;
    manufacturerLabel: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    code: string;
    label: string;
    connectable: boolean;

    constructor(params: ModelInfosDTO) {
        this.id = params.id;
        this.manufacturerId = params.manufacturerId;
        this.manufacturerLabel = params.manufacturerLabel;
        this.imageId = params.imageId;
        this.imageBlurHash = params.imageBlurHash;
        this.imageHeight = params.imageHeight;
        this.imageWidth = params.imageWidth;
        this.code = params.code;
        this.label = params.label;
        this.connectable = params.connectable;
    }
}

export interface ModelInfosDTO {
    id: string;
    manufacturerId: string;
    manufacturerLabel: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    code: string;
    label: string;
    connectable: boolean;
}

export interface ModelFilters {
    modelsIds?: string[];
    search?: string;
}