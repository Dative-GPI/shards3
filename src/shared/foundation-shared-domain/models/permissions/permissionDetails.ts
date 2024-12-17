import { PermissionInfos, type PermissionInfosDTO } from "./permissionInfos";

export class PermissionDetails extends PermissionInfos {
    constructor(params: PermissionDetailsDTO) {
        super(params);
    }
}

export interface PermissionDetailsDTO extends PermissionInfosDTO {
}