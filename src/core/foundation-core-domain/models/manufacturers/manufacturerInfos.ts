export class ManufacturerInfos {
    id: string;
    imageId?: string | null;
    label: string;
    
    constructor(params: ManufacturerInfosDTO) {
        this.id = params.id;
        this.imageId = params.imageId;
        this.label = params.label;
    }
}

export interface ManufacturerInfosDTO {
    id: string;
    imageId?: string | null;
    label: string;
}

export interface ManufacturerFilters {
    search?: string | null;
}