export class ChartModifier {
  hiddenCode: string;
  dataDefinitionId: string;
  hideLabel: boolean;
  
  constructor(params: ChartModifierDTO) {
    this.dataDefinitionId = params.dataDefinitionId;
    this.hideLabel = params.hideLabel;
    this.hiddenCode = params.hiddenCode;
  }
}
  
export interface ChartModifierDTO {
  hiddenCode: string;
  dataDefinitionId: string;
  hideLabel: boolean;
}

export interface CreateChartModifierDTO {
  hiddenCode: string;
  dataDefinitionId: string;
  hideLabel: boolean;
}