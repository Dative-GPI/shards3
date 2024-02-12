export interface FSDataTableColumn {
    [key: string]: any;
    text?: string;
    value?: string;
    index: number;
    hidden: boolean;
    width?: string | number;

    sortable?: boolean;
    sort?: (a: any, b: any) => number;

    filterable?: boolean;
    fixedFilters?: { value: any, text: string }[];
    methodFilter?: (value: any, item: any) => boolean;
    filter?: (value: any, search: string, item: any) => boolean;

    innerValue?: (value: any) => any;

    // Should not be set directly !
    slotName?: string;
}

export interface FSDataTableFilter {
    text: string;
    value: string;
    hidden: boolean;
    filter?: (value: any, property: any, item: any) => boolean;
}