import { OrganisationTypeInfos, OrganisationTypeInfosDTO } from "./organisationTypeInfos";
import { DashboardType } from "../enums/dashboardEnums";

export class OrganisationTypeDetails extends OrganisationTypeInfos {
    description: string;

    constructor(params: OrganisationTypeDetailsDTO) {
        super(params);

        this.description = params.description;
    }
}

export interface OrganisationTypeDetailsDTO extends OrganisationTypeInfosDTO  {
    description: string;
}

export interface ChangeOrganisationTypeDashboardDTO {
    mainDashboardId?: string | null;
    mainDashboardType: DashboardType;
}