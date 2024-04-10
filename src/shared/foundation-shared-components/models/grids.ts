export interface FSGridMosaic {
    categoryLabel: string;
    categoryCode: string;
    items: FSGridItem[];
}

export interface FSGridItem {
    hideDefault: boolean;
    label: string;
    code: string;
    value?: string;
}