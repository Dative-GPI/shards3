export interface FSModelStatus {
    id: string;
    label: string;
    inline: boolean;
    index: number;
    groupById?: string;
    groupByLabel?: string;
    showDefault: boolean;
    iconDefault?: string;
    colorDefault?: string;
}