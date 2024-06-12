export class ChartVariableTranslation {
  languageCode: string;
  label: string;

  constructor(params: ChartVariableTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface ChartVariableTranslationDTO {
  languageCode: string;
  label: string;
}