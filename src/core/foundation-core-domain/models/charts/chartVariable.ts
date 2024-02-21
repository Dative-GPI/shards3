export class ChartVariable {
    label: string;
    valueDefault: number;

    constructor(params: ChartVariableDTO) {
        this.label = params.label;
        this.valueDefault = params.valueDefault;
    }
}
  
export interface ChartVariableDTO {
    label: string;
    valueDefault: number;
}
  
export interface CreateChartVariableDTO {
    label: string;
    valueDefault: number;
}