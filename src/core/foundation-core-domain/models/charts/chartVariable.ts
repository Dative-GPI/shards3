export class ChartVariable {
    id: string;
    chartId: string;
    label: string;
    valueDefault: number;

    constructor(params: ChartVariableDTO) {
        this.id = params.id;
        this.chartId = params.chartId;
        this.label = params.label;
        this.valueDefault = params.valueDefault;
    }
}

export interface ChartVariableDTO {
    id: string;
    chartId: string;
    label: string;
    valueDefault: number;
}

export interface CreateChartVariableDTO {
    chartId: string;
    label: string;
    valueDefault: number;
}