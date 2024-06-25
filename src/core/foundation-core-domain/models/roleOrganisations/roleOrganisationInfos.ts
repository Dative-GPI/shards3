import type { PermissionInfosDTO } from "@dative-gpi/foundation-shared-domain/models";
import { PermissionInfos } from "@dative-gpi/foundation-shared-domain/models";

import type { ApplicationScope } from "../enums/applicationEnums";
import type { UserType } from "../enums/userEnums";

export class RoleOrganisationInfos {
    id: string;
    roleId: string;
    organisationId: string;
    icon: string;
    code: string;
    label: string;
    scope: ApplicationScope;
    userType: UserType;
    tags: string[];
    permissions: PermissionInfos[];

    constructor(params: RoleOrganisationInfosDTO) {
        this.id = params.id;
        this.roleId = params.roleId;
        this.organisationId = params.organisationId;
        this.icon = params.icon;
        this.code = params.code;
        this.label = params.label;
        this.scope = params.scope;
        this.userType = params.userType;
        this.tags = params.tags.slice();
        this.permissions = params.permissions.map(dto => new PermissionInfos(dto));
    }
}

export interface RoleOrganisationInfosDTO {
    id: string;
    roleId: string;
    organisationId: string;
    icon: string;
    code: string;
    label: string;
    scope: ApplicationScope;
    userType: UserType;
    tags: string[];
    permissions: PermissionInfosDTO[];
}

export interface RoleOrganisationFilters {
    userType?: UserType | null;
    search?: string | null;
}