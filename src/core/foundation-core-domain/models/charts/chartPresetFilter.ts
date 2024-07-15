export class ChartPresetFilter {
  id: string;
  chartId : string;
  chartPresetHiddenCode: string;
  chartFilterHiddenCode: string;
  chartFilterLabel: string;
  chartPresetLabel: string;


  constructor(params: ChartPresetFilterDTO) {
    this.id = params.id;
    this.chartId = params.chartId;
    this.chartPresetHiddenCode = params.chartPresetHiddenCode;
    this.chartFilterHiddenCode = params.chartFilterHiddenCode;
    this.chartFilterLabel = params.chartFilterLabel;
    this.chartPresetLabel = params.chartPresetLabel;
  }
}

export interface ChartPresetFilterDTO {
  id: string;
  chartId : string;
  chartPresetHiddenCode: string;
  chartFilterHiddenCode: string;
  chartFilterLabel: string;
  chartPresetLabel: string;
}

export interface CreateChartPresetFilterDTO {
  chartPresetHiddenCode: string;
  chartFilterHiddenCode: string;
}