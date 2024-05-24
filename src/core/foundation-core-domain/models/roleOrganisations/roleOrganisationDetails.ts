import { RoleOrganisationInfos, RoleOrganisationInfosDTO } from "./roleOrganisationInfos";
import { RoleType } from "../enums/roleEnums";

export class RoleOrganisationDetails extends RoleOrganisationInfos {
    description: string;

    constructor(params: RoleOrganisationDetailsDTO) {
        super(params);

        this.description = params.description;
    }
}

export interface RoleOrganisationDetailsDTO extends RoleOrganisationInfosDTO {
    description: string;
}

export interface CreateRoleOrganisationDTO {
    roleTemplateType: RoleType;
    roleTemplateId?: string | null;
    userType: number;
    icon: string;
    code: string;
    label: string;
    description: string;
    tags: string[];
}

export interface UpdateRoleOrganisationDTO {
    icon: string;
    code: string;
    label: string;
    description: string;
    tags: string[];
    permissionsIds: string[];
}