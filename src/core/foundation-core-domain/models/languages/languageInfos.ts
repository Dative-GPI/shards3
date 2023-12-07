export class LanguageInfos {
    id: string;
    icon: string;
    code: string;
    label: string;
  
    constructor(params: LanguageInfosDTO) {
      this.id = params.id;
      this.icon = params.icon;
      this.code = params.code;
      this.label = params.label;
    }
  }
  
  export interface LanguageInfosDTO {
    id: string;
    icon: string;
    code: string;
    label: string;
  }

  export interface LanguageFilters {
    search?: string;
  }