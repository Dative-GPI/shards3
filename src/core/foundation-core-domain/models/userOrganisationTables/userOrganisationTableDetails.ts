import { UserOrganisationTableInfos, UserOrganisationTableInfosDTO } from "./userOrganisationTableInfos";
import { UpdateUserOrganisationColumnDTO } from "../userOrganisationColumns/userOrganisationColumnDetails";

export class UserOrganisationTableDetails extends UserOrganisationTableInfos {
    constructor(dto: UserOrganisationTableDetailsDTO) {
        super(dto);
    }
}

export interface UserOrganisationTableDetailsDTO extends UserOrganisationTableInfosDTO {
}

export interface UpdateUserOrganisationTableDTO {
    mode: "table" | "iterator";
    rowsPerPage: number;
    sortByKey?: string;
    sortByOrder?: string;
    columns: UpdateUserOrganisationColumnDTO[];
}