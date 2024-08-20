export class TranslationScenarioParameter {
  languageCode: string;
  label: string;

  constructor(params: TranslationScenarioParameterDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface TranslationScenarioParameterDTO {
  languageCode: string;
  label: string;
}