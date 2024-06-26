import type { PermissionInfosDTO } from "./permissionInfos";
import { PermissionInfos } from "./permissionInfos";

export class PermissionDetails extends PermissionInfos {
    constructor(params: PermissionDetailsDTO) {
        super(params);
    }
}

export interface PermissionDetailsDTO extends PermissionInfosDTO {
}