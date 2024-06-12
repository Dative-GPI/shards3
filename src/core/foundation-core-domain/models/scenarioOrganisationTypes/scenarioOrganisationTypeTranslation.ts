export class ScenarioOrganisationTypeTranslation {
  languageCode: string;
  label: string;
  description: string;

  constructor(params: ScenarioOrganisationTypeTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
    this.description = params.description;
  }
}

export interface ScenarioOrganisationTypeTranslationDTO {
  languageCode: string;
  label: string;
  description: string;
}