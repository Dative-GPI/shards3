export class DashboardEntityPresetTranslation {
  languageCode: string;
  label: string;

  constructor(params: DashboardEntityPresetTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface DashboardEntityPresetTranslationDTO {
  languageCode: string;
  label: string;
}