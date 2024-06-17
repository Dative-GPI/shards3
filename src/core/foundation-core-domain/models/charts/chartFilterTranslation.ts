export class ChartFilterTranslation {
    languageCode: string;
    label: string;
  
    constructor(params: ChartFilterTranslationDTO) {
      this.languageCode = params.languageCode;
      this.label = params.label;
    }
  }
  
  export interface ChartFilterTranslationDTO {
    languageCode: string;
    label: string;
  }