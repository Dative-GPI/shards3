import type { ChartPresetTranslationDTO } from "./chartPresetTranslation";
import { ChartPresetTranslation } from "./chartPresetTranslation";

export class ChartPreset {
  id: string;
  chartId: string;
  hiddenCode: string;
  label: string;
  labelDefault: string;
  icon: string;
  index: number;
  translations: ChartPresetTranslation[];

  constructor(params: ChartPresetDTO) {
    this.id = params.id;
    this.chartId = params.chartId;
    this.hiddenCode = params.hiddenCode;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.icon = params.icon;
    this.index = params.index;
    this.translations = params.translations.map(t => new ChartPresetTranslation(t));
  }
}

export interface ChartPresetDTO {
  id: string;
  chartId: string;
  hiddenCode: string;
  label: string;
  labelDefault: string;
  icon: string;
  index: number;
  translations: ChartPresetTranslationDTO[];
}

export interface CreateChartPresetDTO {
  id: string;
  hiddenCode: string;
  labelDefault: string;
  icon: string;
  index: number;
  translations: ChartPresetTranslationDTO[];
}