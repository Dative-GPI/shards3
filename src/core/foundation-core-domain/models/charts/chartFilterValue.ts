export class ChartFilterValue {
    id?: string;
    value: string;
    isCustom: boolean;
  
    constructor(params: ChartFilterValueDTO) {
      this.id = params.id;
      this.value = params.value;
      this.isCustom = params.isCustom;
    }
  }
  
  export interface ChartFilterValueDTO {
    id?: string;
    value: string;
    isCustom: boolean;
  }
  
  export interface CreateChartFilterValueDTO {
    id?: string;
    value: string;
    isCustom: boolean;
  }