export class ChartSerieTranslation {
  languageCode: string;
  label: string;
  xAxisLabel: string;
  yAxisLabel: string;

  constructor(params: ChartSerieTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
    this.xAxisLabel = params.xAxisLabel;
    this.yAxisLabel = params.yAxisLabel;
  }
}

export interface ChartSerieTranslationDTO {
  languageCode: string;
  label: string;
  xAxisLabel: string;
  yAxisLabel: string;
}

export interface CreateChartSerieTranslationDTO {
  languageCode: string;
  label: string;
  xAxisLabel: string;
  yAxisLabel: string;
}