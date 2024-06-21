export class ScenarioTranslation {
  languageCode: string;
  label: string;
  description: string;
  alertLabel: string;
  alertDescription: string;

  constructor(params: ScenarioTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
    this.description = params.description;
    this.alertLabel = params.alertLabel;
    this.alertDescription = params.alertDescription;
  }
}

export interface ScenarioTranslationDTO {
  languageCode: string;
  label: string;
  description: string;
  alertLabel: string;
  alertDescription: string;
}