export interface GridMosaic {
    categoryLabel: string;
    categoryCode: string;
    items: GridItem[];
}

export interface GridItem {
    label: string;
    code: string;
    value: string;
    hideDefault: boolean;
}