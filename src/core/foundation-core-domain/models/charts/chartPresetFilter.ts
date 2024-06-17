export class ChartPresetFilter {
  id: string;
  chartPresetId: string;
  chartPresetLabel: string;
  chartFilterId: string;


  constructor(params: ChartPresetFilterDTO) {
    this.id = params.id;
    this.chartPresetId = params.chartPresetId;
    this.chartPresetLabel = params.chartPresetLabel;
    this.chartFilterId = params.chartFilterId;
  }
}

export interface ChartPresetFilterDTO {
  id: string;
  chartPresetId: string;
  chartPresetLabel: string;
  chartFilterId: string;
}

export interface CreateChartPresetFilterDTO {
  chartPresetId: string;
  chartFilterId: string;
}