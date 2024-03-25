
export interface Item {
    code: string;
    label: string;
    value: string;
    editable: boolean;
    valueLeft: boolean;
    valueRight: boolean;
}

export interface GridItem {
    categoryLabel: string;
    categoryCode: string;
    items: Item[]
}