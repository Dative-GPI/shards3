import { FamilyInfos, FamilyInfosDTO } from "./familyInfos";

export class FamilyDetails extends FamilyInfos {
    parentId: string;
    parentLabel: string;
    
    constructor(params: FamilyDetailsDTO) {
        super(params);

        this.parentId = params.parentId;
        this.parentLabel = params.parentLabel;
    }
}

export interface FamilyDetailsDTO extends FamilyInfosDTO {
    parentId: string;
    parentLabel: string;
}