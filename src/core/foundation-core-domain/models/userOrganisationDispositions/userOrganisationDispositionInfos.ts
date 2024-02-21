export class UserOrganisationDispositionInfos {
    columnId: string;
    label: string;
    value: string;
    index: number;
    hidden: boolean;
    sortable: boolean;
    filterable: boolean;
    configuration: boolean;

    constructor(dto: UserOrganisationDispositionInfosDTO, ...args: any[]) {
        this.columnId = dto.columnId;
        this.label = dto.label;
        this.value = dto.value;
        this.index = dto.index;
        this.hidden = dto.hidden;
        this.sortable = dto.sortable;
        this.filterable = dto.filterable;
        this.configuration = dto.configuration;
    }
}

export interface UserOrganisationDispositionInfosDTO {
    columnId: string;
    label: string;
    value: string;
    index: number;
    hidden: boolean;
    sortable: boolean;
    filterable: boolean;
    configuration: boolean;
}