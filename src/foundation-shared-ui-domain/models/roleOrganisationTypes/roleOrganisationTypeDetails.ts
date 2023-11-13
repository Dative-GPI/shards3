import { RoleOrganisationTypeInfos, RoleOrganisationTypeInfosDTO } from "./roleOrganisationTypeInfos";

export class RoleOrganisationTypeDetails extends RoleOrganisationTypeInfos {
    description: string;

    constructor(params: RoleOrganisationTypeDetailsDTO) {
        super(params);

        this.description = params.description;
    }
}

export interface RoleOrganisationTypeDetailsDTO extends RoleOrganisationTypeInfosDTO {
    description: string;
}