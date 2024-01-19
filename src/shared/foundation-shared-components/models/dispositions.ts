export interface FSDataTableColumn {
    [key: string]: any;
    text?: string;
    value?: string;
    index: number;
    hidden: boolean;
    divider?: boolean;
    groupable?: boolean;
    width?: string | number;
    class?: string | string[];
    cellClass?: string | string[];
    sortable?: boolean;
    sort?: (a: any, b: any) => number;
    filterable?: boolean;
    fixedFilters?: { value: any, text: string }[];
    methodFilter?: (value: any, item: any) => boolean;
    innerValue?: (value: any) => any;
    // Used by vuetify to filter based on search
    filter?: (value: any, search: string, item: any) => boolean;
    // Equivalent to filterable. Should not be set directly !
    canBeFiltered?: boolean;
    // Should not be set directly !
    slotName?: string;
}

export interface FSDataTableFilter {
    text: string;
    value: string;
    hidden: boolean;
    filter?: (value: any, property: any, item: any) => boolean;
}