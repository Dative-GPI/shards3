export class ChartFilterValueTranslation {
  languageCode: string;
  label: string;

  constructor(params: ChartFilterValueTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface ChartFilterValueTranslationDTO {
  languageCode: string;
  label: string;
}