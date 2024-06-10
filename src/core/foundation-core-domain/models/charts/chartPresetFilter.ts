export class ChartPresetFilter {
  id: string;
  chardPresetId: string;
  chartFilterId: string;


  constructor(params: ChartPresetFilterDTO) {
    this.id = params.id;
    this.chardPresetId = params.chardPresetId;
    this.chartFilterId = params.chartFilterId;
  }
}

export interface ChartPresetFilterDTO {
  id: string;
  chardPresetId: string;
  chartFilterId: string;

}

export interface CreateChartPresetFilterDTO {
  chardPresetId: string;
  chartFilterId: string;
}