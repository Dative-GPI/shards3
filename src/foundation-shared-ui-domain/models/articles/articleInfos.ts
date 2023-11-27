export class ArticleInfos {
    id: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    label: string;
    
    constructor(params: ArticleInfosDTO) {
        this.id = params.id;
        this.label = params.label;
        this.imageId = params.imageId;
        this.imageBlurHash = params.imageBlurHash;
        this.imageHeight = params.imageHeight;
        this.imageWidth = params.imageWidth;
    }
}

export interface ArticleInfosDTO {
    id: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    label: string;
}

export interface ArticleFilters {
    search?: string;
}