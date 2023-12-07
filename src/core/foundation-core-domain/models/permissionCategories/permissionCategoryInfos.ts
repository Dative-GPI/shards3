export class PermissionCategoryInfos {
    id: string;
    code: string;
    label: string;
    prefix: string;

    constructor(params: PermissionCategoryInfosDTO) {
        this.id = params.id;
        this.code = params.code;
        this.label = params.label;
        this.prefix = params.prefix;
    }
}

export interface PermissionCategoryInfosDTO {
    id: string;
    code: string;
    label: string;
    prefix: string;
}

export interface PermissionCategoryFilters {
    search?: string;
}