import { PermissionInfos, PermissionInfosDTO } from "../permissions/permissionInfos";
import { ApplicationScope } from "../enums/applicationEnums";
import { UserType } from "../enums/userEnums";

export class RoleOrganisationTypeInfos {
    id: string;
    roleId: string;
    organisationTypeId: string;
    organisationTypeLabel: string;
    icon: string;
    code: string;
    label: string;
    scope: ApplicationScope;
    userType: UserType;
    tags: string[];
    permissions: PermissionInfos[];

    constructor(params: RoleOrganisationTypeInfosDTO) {
        this.id = params.id;
        this.roleId = params.roleId;
        this.organisationTypeId = params.organisationTypeId;
        this.organisationTypeLabel = params.organisationTypeLabel;
        this.scope = params.scope;
        this.userType = params.userType;
        this.icon = params.icon;
        this.code = params.code;
        this.label = params.label;
        this.scope = params.scope;
        this.userType = params.userType;
        this.tags = params.tags.slice();
        this.permissions = params.permissions.map(dto => new PermissionInfos(dto));
    }
}

export interface RoleOrganisationTypeInfosDTO {
    id: string;
    roleId: string;
    organisationTypeId: string;
    organisationTypeLabel: string;
    icon: string;
    code: string;
    label: string;
    scope: ApplicationScope;
    userType: UserType;
    tags: string[];
    permissions: PermissionInfosDTO[];
}

export interface RoleOrganisationTypeFilters {
    userType?: number;
    search?: string;
}