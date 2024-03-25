export interface GridItem {
    categoryLabel: string;
    categoryCode: string;
    items: Item[];
}

export interface Item {
    label: string;
    code: string;
    value: string;
    hideDefault: boolean;
}