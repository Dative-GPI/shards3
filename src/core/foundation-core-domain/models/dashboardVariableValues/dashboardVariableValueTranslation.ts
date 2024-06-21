export class DashboardVariableValueTranslation {
  languageCode: string;
  label: string;

  constructor (params: DashboardVariableValueTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface DashboardVariableValueTranslationDTO {
  languageCode: string;
  label: string;
}