export class FamilyInfos {
    id: string;
    label: string;
    
    constructor(params: FamilyInfosDTO) {
        this.id = params.id;
        this.label = params.label;
    }
}

export interface FamilyInfosDTO {
    id: string;
    label: string;
}

export interface FamilyFilters {
    search?: string;
}