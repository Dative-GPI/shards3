import { ChartFilterValueTranslation, ChartFilterValueTranslationDTO } from "./chartFilterValueTranslation";

export class ChartFilterValue {
    id?: string;
    label: string;
    labelDefault: string;
    isCustom: boolean;
    translations: ChartFilterValueTranslation[];
  
    constructor(params: ChartFilterValueDTO) {
      this.id = params.id;
      this.label = params.label;
      this.labelDefault = params.labelDefault;
      this.isCustom = params.isCustom;
      this.translations = params.translations.map((translation) => new ChartFilterValueTranslation(translation));
    }
  }
  
  export interface ChartFilterValueDTO {
    id?: string;
    label: string;
    labelDefault: string;
    isCustom: boolean;
    translations: ChartFilterValueTranslationDTO[];
  }
  
  export interface CreateChartFilterValueDTO {
    id?: string;
    labelDefault: string;
    isCustom: boolean;
    translations: ChartFilterValueTranslationDTO[];
  }