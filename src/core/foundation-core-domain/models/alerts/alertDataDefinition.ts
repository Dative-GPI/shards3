export class AlertDataDefinition {
  dataDefinitionId: string;
  value: string;
  unit: string;
  label: string;

  constructor(params: AlertDataDefinitionDTO) {
    this.dataDefinitionId = params.dataDefinitionId;
    this.value = params.value;
    this.unit = params.unit;
    this.label = params.label;
  }
}

export interface AlertDataDefinitionDTO {
  dataDefinitionId: string;
  value: string;
  unit: string;
  label: string;
}