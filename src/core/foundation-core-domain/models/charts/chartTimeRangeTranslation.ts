export class ChartTimeRangeTranslation {
	languageCode: string;
	label: string;

	constructor(params: ChartTimeRangeTranslationDTO) {
		this.languageCode = params.languageCode;
		this.label = params.label;
	}
}

export interface ChartTimeRangeTranslationDTO {
	languageCode: string;
	label: string;
}

export interface CreateChartTimeRangeTranslationDTO {
	languageCode: string;
	label: string;
}