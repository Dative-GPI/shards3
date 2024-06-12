import { ChartPresetFilter, ChartPresetFilterDTO } from "./chartPresetFilter";
import { ChartPresetTranslation, ChartPresetTranslationDTO } from "./chartPresetTranslation";

export class ChartPreset {
  id: string;
  chartId: string;
  label: string;
  labelDefault: string;
  icon: string;
  chartFilters: ChartPresetFilter[];
  translations: ChartPresetTranslation[];

  constructor(params: ChartPresetDTO) {
    this.id = params.id;
    this.chartId = params.chartId;
    this.label = params.label;
    this.icon = params.icon;
    this.chartFilters = params.chartFilters.map(cf => new ChartPresetFilter(cf));
    this.translations = params.translations.map(t => new ChartPresetTranslation(t));
  }
}

export interface ChartPresetDTO {
  id: string;
  chartId: string;
  label: string;
  labelDefault: string;
  icon: string;
  chartFilters: ChartPresetFilterDTO[];
  translations: ChartPresetTranslationDTO[];
}

export interface CreateChartPresetDTO {
  id: string;
  chartId: string;
  labelDefault: string;
  icon: string;
  translations: ChartPresetTranslationDTO[];
}