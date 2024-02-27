export class ColumnInfos {
    columnId: string;
    text: string;
    value: string;
    sortable: boolean;
    filterable: boolean;
    // Depends on [OrganisationType, UserOrganisation]
    index: number;
    hidden: boolean;

    constructor(dto: ColumnInfosDTO) {
        this.columnId = dto.columnId;
        this.text = dto.text;
        this.value = dto.value;
        this.sortable = dto.sortable;
        this.filterable = dto.filterable;
        this.index = dto.index;
        this.hidden = dto.hidden;
    }
}

export interface ColumnInfosDTO {
    columnId: string;
    text: string;
    value: string;
    sortable: boolean;
    filterable: boolean;
    index: number;
    hidden: boolean;
}