import type { ArticleInfosDTO } from "./articleInfos";
import { ArticleInfos } from "./articleInfos";

export class ArticleDetails extends ArticleInfos {
    manufacturerId: string;
    familyId: string;
    familyLabel: string;
    code: string;
    description: string;
    
    constructor(params: ArticleDetailsDTO) {
        super(params);

        this.manufacturerId = params.manufacturerId;
        this.familyId = params.familyId;
        this.familyLabel = params.familyLabel;
        this.code = params.code;
        this.description = params.description;
    }
}

export interface ArticleDetailsDTO extends ArticleInfosDTO {
    manufacturerId: string;
    familyId: string;
    familyLabel: string;
    code: string;
    description: string;
}