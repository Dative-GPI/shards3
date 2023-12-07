export class AlertDataDefinition {
    dataDefinitionId: string;
    value: string;
    label: string;
  
    constructor(params: AlertDataDefinitionDTO) {
      this.dataDefinitionId = params.dataDefinitionId;
      this.value = params.value;
      this.label = params.label;
    }
  }
  
  export interface AlertDataDefinitionDTO {
    dataDefinitionId: string;
    value: string;
    label: string;
  }