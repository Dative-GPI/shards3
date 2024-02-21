export class ChartValueRangeTranslation {
    languageCode: string;
    label: string;

    constructor(params: ChartValueRangeTranslationDTO) {
        this.languageCode = params.languageCode;
        this.label = params.label;
    }
}

export interface ChartValueRangeTranslationDTO {
    languageCode: string;
    label: string;
}

export interface CreateChartValueRangeTranslationDTO {
    languageCode: string;
    label: string;
}