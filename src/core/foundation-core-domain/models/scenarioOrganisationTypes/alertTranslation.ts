export class AlertTranslation {
  languageId: string;
  label: string;
  description: string;

  constructor(params: AlertTranslationDTO) {
    this.languageId = params.languageId;
    this.label = params.label;
    this.description = params.description;
  }
}

export interface AlertTranslationDTO {
  languageId: string;
  label: string;
  description: string;
}