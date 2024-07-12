import type { ChartSerieDTO, CreateChartSerieDTO } from "./chartSerie";
import { ChartSerie } from "./chartSerie";
import type { ChartAxisDTO, CreateChartAxisDTO } from "./chartAxis";
import { ChartAxis } from "./chartAxis";

export class ChartPlot {
  id: string;
  chartId: string;
  hiddenCode: string;
  yAxisHiddenCode?: string;
  index : number;

  constructor(params: ChartPlotDTO) {
    this.id = params.id;
    this.chartId = params.chartId;
    this.hiddenCode = params.hiddenCode;
    this.yAxisHiddenCode = params.yAxisHiddenCode;
    this.index = params.index;
  }
}

export interface ChartPlotDTO {
  id: string;
  chartId: string;
  hiddenCode: string;
  yAxisHiddenCode?: string;
  index : number;
}

export interface CreateChartPlotDTO {
  hiddenCode: string;
  yAxisHiddenCode?: string;
}