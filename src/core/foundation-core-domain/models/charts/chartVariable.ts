import { ChartVariableTranslation, ChartVariableTranslationDTO } from "./chartVariableTranslation";

export class ChartVariable {
  id: string;
  chartId: string;
  label: string;
  labelDefault: string;
  code: string;
  valueDefault: number;
  translations: ChartVariableTranslation[];

  constructor(params: ChartVariableDTO) {
    this.id = params.id;
    this.chartId = params.chartId;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.code = params.code;
    this.valueDefault = params.valueDefault;
    this.translations = params.translations.map(t => new ChartVariableTranslation(t));
  }
}

export interface ChartVariableDTO {
  id: string;
  chartId: string;
  label: string;
  labelDefault: string;
  code: string;
  valueDefault: number;
  translations: ChartVariableTranslationDTO[];
}

export interface CreateChartVariableDTO {
  chartId: string;
  labelDefault: string;
  code: string;
  valueDefault: number;
  translations: ChartVariableTranslationDTO[];
}