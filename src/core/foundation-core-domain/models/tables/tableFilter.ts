export class TableFilter {
    key: string;
    value: string;
    hidden: boolean;

    constructor(dto: TableFilterDTO) {
        this.key = dto.key;
        this.value = dto.value;
        this.hidden = dto.hidden;
    }
}

export interface TableFilterDTO {
    key: string;
    value: string;
    hidden: boolean;
}