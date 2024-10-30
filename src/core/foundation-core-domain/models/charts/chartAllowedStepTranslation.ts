export class ChartAllowedStepTranslation {
  languageCode: string;
  label: string;

  constructor(params: ChartAllowedStepTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface ChartAllowedStepTranslationDTO {
  languageCode: string;
  label: string;
}

export interface CreateChartAllowedStepTranslationDTO {
  languageCode: string;
  label: string;
}