export class ChartPresetFilter {
  id: string;
  chartPresetId: string;
  chartFilterId: string;


  constructor(params: ChartPresetFilterDTO) {
    this.id = params.id;
    this.chartPresetId = params.chartPresetId;
    this.chartFilterId = params.chartFilterId;
  }
}

export interface ChartPresetFilterDTO {
  id: string;
  chartPresetId: string;
  chartFilterId: string;

}

export interface CreateChartPresetFilterDTO {
  chartPresetId: string;
  chartFilterId: string;
}