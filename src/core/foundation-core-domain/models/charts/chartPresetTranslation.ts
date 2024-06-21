export class ChartPresetTranslation {
  languageCode: string;
  label: string;

  constructor(params: ChartPresetTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface ChartPresetTranslationDTO {
  languageCode: string;
  label: string;
}