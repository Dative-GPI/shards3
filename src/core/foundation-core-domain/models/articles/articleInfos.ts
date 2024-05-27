export class ArticleInfos {
    id: string;
    imageId: string | null;
    label: string;
    
    constructor(params: ArticleInfosDTO) {
        this.id = params.id;
        this.label = params.label;
        this.imageId = params.imageId;
    }
}

export interface ArticleInfosDTO {
    id: string;
    imageId: string | null;
    label: string;
}

export interface ArticleFilters {
    search?: string | null;
}