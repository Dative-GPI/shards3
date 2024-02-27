import { TableInfos, TableInfosDTO } from "./tableInfos";
import { UpdateColumnDTO } from "./columnDetails";
import { TableOrderDTO } from "./tableOrder";

export class TableDetails extends TableInfos {
    constructor(dto: TableDetailsDTO) {
        super(dto);
    }
}

export interface TableDetailsDTO extends TableInfosDTO {
}

export interface UpdateTableDTO {
    mode: "table" | "iterator";
    rowsPerPage: number;
    columns: UpdateColumnDTO[];
    sortBy: TableOrderDTO | undefined;
}