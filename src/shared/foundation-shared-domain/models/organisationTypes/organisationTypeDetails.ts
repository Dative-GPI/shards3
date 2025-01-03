import type { OrganisationTypeInfosDTO } from "./organisationTypeInfos";
import { OrganisationTypeInfos } from "./organisationTypeInfos";
import type { DashboardType } from "../../enums/dashboards";

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
    mainDashboardId: string | null;
    mainDashboardType: DashboardType;
}