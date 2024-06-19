export class DashboardDatePresetTranslation {
  languageCode: string;
  label: string;

  constructor(params: DashboardDatePresetTranslationDTO) {
    this.languageCode = params.languageCOde;
    this.label = params.label;
  }
}

export interface DashboardDatePresetTranslationDTO {
  languageCOde: string;
  label: string;
}