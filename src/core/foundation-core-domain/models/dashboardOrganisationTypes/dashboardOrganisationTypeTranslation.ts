export class DashboardOrganisationTypeTranslation {
  languageCode: string;
  label: string;

  constructor(params: DashboardOrganisationTypeTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface DashboardOrganisationTypeTranslationDTO {
  languageCode: string;
  label: string;
}