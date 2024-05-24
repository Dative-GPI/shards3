export interface FSDataTableColumn {
    [key: string]: any;
    text?: string | null;
    value?: string | null;
    index: number;
    hidden: boolean;
    width?: string | number | null;

    sortable?: boolean | null;
    sort?: ((a: any, b: any) => number) | null;

    filterable?: boolean | null;
    fixedFilters?: { value: any, text: string }[] | null;
    methodFilter?: ((value: any, item: any) => boolean) | null;
    filter?: ((value: any, search: string, item: any) => boolean) | null;

    innerValue?: ((value: any) => any) | null;

    // Should not be set directly !
    slotName?: string | null;
}

export interface FSDataTableFilter {
    text: string;
    value: string;
    hidden: boolean;
    filter?: ((value: any, property: any, item: any) => boolean) | null;
}

export interface FSDataTableOrder {
    key: string;
    order: "asc" | "desc";
}