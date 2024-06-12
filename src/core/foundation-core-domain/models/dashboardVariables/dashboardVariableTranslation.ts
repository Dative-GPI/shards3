export class DashboardVariableTranslation {
  languageCode: string;
  label: string;

  constructor(params: DashboardVariableTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface DashboardVariableTranslationDTO {
  languageCode: string;
  label: string;
}