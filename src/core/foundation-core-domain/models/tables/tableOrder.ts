export class TableOrder {
    key: string;
    order: "asc" | "desc";

    constructor(dto: TableOrderDTO) {
        this.key = dto.key;
        this.order = dto.order;
    }
}

export interface TableOrderDTO {
    key: string;
    order: "asc" | "desc";
}