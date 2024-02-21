export class ChartModifier {
    dataDefinitionId: string;
    hideLabel: boolean;
  
    constructor(params: ChartModifierDTO) {
      this.dataDefinitionId = params.dataDefinitionId;
      this.hideLabel = params.hideLabel;
    }
  }
  
  export interface ChartModifierDTO {
    dataDefinitionId: string;
    hideLabel: boolean;
  }
  
  export interface CreateChartModifierDTO {
    dataDefinitionId: string;
    hideLabel: boolean;
  }