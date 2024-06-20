export class ChartPresetFilter {
  id: string;
  chartPresetId: string;
  chartPresetLabel: string;
  chartFilterId: string;
  chartFilterLabel: string;


  constructor(params: ChartPresetFilterDTO) {
    this.id = params.id;
    this.chartPresetId = params.chartPresetId;
    this.chartPresetLabel = params.chartPresetLabel;
    this.chartFilterId = params.chartFilterId;
    this.chartFilterLabel = params.chartFilterLabel;
  }
}

export interface ChartPresetFilterDTO {
  id: string;
  chartPresetId: string;
  chartPresetLabel: string;
  chartFilterId: string;
  chartFilterLabel: string;
}

export interface CreateChartPresetFilterDTO {
  chartPresetId: string;
  chartFilterId: string;
}