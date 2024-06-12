export class ChartPresetFilter {
  id: string;
  chartPresetId: string;
  chartFilterId: string;
  chartPresetLabel: string;
  chartFilterLabel: string;


  constructor(params: ChartPresetFilterDTO) {
    this.id = params.id;
    this.chartPresetId = params.chartPresetId;
    this.chartFilterId = params.chartFilterId;
    this.chartPresetLabel = params.chartPresetLabel;
    this.chartFilterLabel = params.chartFilterLabel;
  }
}

export interface ChartPresetFilterDTO {
  id: string;
  chartPresetId: string;
  chartFilterId: string;
  chartPresetLabel: string;
  chartFilterLabel: string;
}

export interface CreateChartPresetFilterDTO {
  chartPresetId: string;
  chartFilterId: string;
}