export class ChartModifier {
  id : string;
  chartId : string;
  hiddenCode: string;
  dataDefinitionId: string;
  hideLabel: boolean;
  
  constructor(params: ChartModifierDTO) {
    this.id = params.id;
    this.chartId = params.chartId;
    this.hiddenCode = params.hiddenCode;
    this.dataDefinitionId = params.dataDefinitionId;
    this.hideLabel = params.hideLabel;
  }
}
  
export interface ChartModifierDTO {
  id : string
  chartId : string;
  hiddenCode: string;
  dataDefinitionId: string;
  hideLabel: boolean;
}

export interface CreateChartModifierDTO {
  hiddenCode: string;
  dataDefinitionId: string;
  hideLabel: boolean;
}