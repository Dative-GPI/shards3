export interface FSGridMosaic {
    categoryLabel: string;
    categoryCode: string;
    items: FSGridItem[];
}

export interface FSGridItem {
    label: string;
    code: string;
    value?: string;
    hideDefault?: boolean;
}