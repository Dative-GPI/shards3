import { PermissionCategoryInfos, PermissionCategoryInfosDTO } from "./permissionCategoryInfos";

export class PermissionCategoryDetails extends PermissionCategoryInfos {
    constructor(params: PermissionCategoryDetailsDTO) {
        super(params);
    }
}

export interface PermissionCategoryDetailsDTO extends PermissionCategoryInfosDTO {
}