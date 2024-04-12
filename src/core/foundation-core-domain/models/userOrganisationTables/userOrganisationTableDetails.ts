import { UserOrganisationTableInfos, UserOrganisationTableInfosDTO } from "./userOrganisationTableInfos";
import { UpdateUserOrganisationColumnDTO } from "../userOrganisationColumns/userOrganisationColumnDetails";

export class TableDetails extends UserOrganisationTableInfos {
    constructor(dto: TableDetailsDTO) {
        super(dto);
    }
}

export interface TableDetailsDTO extends UserOrganisationTableInfosDTO {
}

export interface UpdateTableDTO {
    mode: "table" | "iterator";
    rowsPerPage: number;
    sortByKey?: string;
    sortByOrder?: string;
    columns: UpdateUserOrganisationColumnDTO[];
}