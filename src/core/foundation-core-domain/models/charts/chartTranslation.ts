export class ChartTranslation {
  languageCode: string;
  label: string;
  title: string;

  constructor(params: ChartTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
    this.title = params.title;
  }
}

export interface ChartTranslationDTO {
  languageCode: string;
  label: string;
  title: string;
}