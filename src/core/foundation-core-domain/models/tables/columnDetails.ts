import { ColumnInfos, ColumnInfosDTO } from "./columnInfos";

export class ColumnDetails extends ColumnInfos {
    constructor(dto: ColumnInfosDTO) {
        super(dto);
    }
}

export interface ColumnDetailsDTO extends ColumnInfosDTO {
}

export interface UpdateColumnDTO {
    columnId: string;
    index: number;
    hidden: boolean;
}