export class DashboardDatePresetTranslation {
  languageCode: string;
  label: string;

  constructor(params: DashboardDatePresetTranslationDTO) {
    this.languageCode = params.languageCode;
    this.label = params.label;
  }
}

export interface DashboardDatePresetTranslationDTO {
  languageCode: string;
  label: string;
}