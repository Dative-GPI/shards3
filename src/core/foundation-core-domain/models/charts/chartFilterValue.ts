export class ChartFilterValue {
    id?: string;
    label: string;
    isCustom: boolean;
  
    constructor(params: ChartFilterValueDTO) {
      this.id = params.id;
      this.label = params.label;
      this.isCustom = params.isCustom;
    }
  }
  
  export interface ChartFilterValueDTO {
    id?: string;
    label: string;
    isCustom: boolean;
  }
  
  export interface CreateChartFilterValueDTO {
    id?: string;
    label: string;
    isCustom: boolean;
  }