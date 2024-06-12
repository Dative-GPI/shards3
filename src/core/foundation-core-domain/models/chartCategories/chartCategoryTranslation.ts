export class ChartCategoryTranslation {
  languageCode: string;
  label: string;

  constructor(params: ChartCategoryTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface ChartCategoryTranslationDTO {
  languageCode: string;
  label: string;
}