export class DashboardTranslation {
    languageCode: string;
    label: string;
  
    constructor(params: DashboardTranslationDTO) {
      this.languageCode = params.languageCode;
      this.label = params.label;
    }
  }
  
  export interface DashboardTranslationDTO {
    languageCode: string;
    label: string;
  }