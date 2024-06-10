import { ChartPresetFilter, ChartPresetFilterDTO } from "./chartPresetFilter";

export class ChartPreset {
  id: string;
  chartId: string;
  label: string;
  icon: string;
  chartFilters: ChartPresetFilter[];

  constructor(params: ChartPresetDTO) {
    this.id = params.id;
    this.chartId = params.chartId;
    this.label = params.label;
    this.icon = params.icon;
    this.chartFilters = params.chartFilters.map(cf => new ChartPresetFilter(cf));
  }
}

export interface ChartPresetDTO {
  id: string;
  chartId: string;
  label: string;
  icon: string;
  chartFilters: ChartPresetFilterDTO[];
}

export interface CreateChartPresetDTO {
  id: string;
  chartId: string;
  label: string;
  icon: string;
}