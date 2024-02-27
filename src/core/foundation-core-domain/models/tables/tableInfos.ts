import { ColumnInfos, ColumnInfosDTO } from "./columnInfos";
import { TableOrder, TableOrderDTO } from "./tableOrder";

export class TableInfos {
    id: string;
    code: string;
    mode: "table" | "iterator";
    columns: ColumnInfos[];
    sortBy: TableOrder | undefined;
    rowsPerPage: number;

    constructor(dto: TableInfosDTO) {
        this.id = dto.id;
        this.code = dto.code;
        this.mode = dto.mode;
        this.columns = dto.columns?.map(dto => new ColumnInfos(dto)) ?? [];
        this.sortBy = dto.sortBy ? new TableOrder(dto.sortBy) : undefined;
        this.rowsPerPage = dto.rowsPerPage;
    }
}

export interface TableInfosDTO {
    id: string;
    code: string;
    mode: "table" | "iterator";
    columns: ColumnInfosDTO[];
    sortBy: TableOrderDTO | undefined;
    rowsPerPage: number;
}