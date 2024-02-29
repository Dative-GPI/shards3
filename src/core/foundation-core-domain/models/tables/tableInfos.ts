import { ColumnInfos, ColumnInfosDTO } from "./columnInfos";
import { TableOrder, TableOrderDTO } from "./tableOrder";

export class TableInfos {
    id: string;
    code: string;
    columns: ColumnInfos[];

    // Depends on [OrganisationType, UserOrganisation]
    mode: "table" | "iterator";
    sortBy: TableOrder | undefined;
    rowsPerPage: number;

    constructor(dto: TableInfosDTO) {
        this.id = dto.id;
        this.code = dto.code;
        this.columns = dto.columns?.map(dto => new ColumnInfos(dto)) ?? [];
        this.mode = dto.mode;
        this.sortBy = dto.sortBy ? new TableOrder(dto.sortBy) : undefined;
        this.rowsPerPage = dto.rowsPerPage;
    }
}

export interface TableInfosDTO {
    id: string;
    code: string;
    columns: ColumnInfosDTO[];
    mode: "table" | "iterator";
    sortBy: TableOrderDTO | undefined;
    rowsPerPage: number;
}