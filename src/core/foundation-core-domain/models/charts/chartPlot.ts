import { ChartSerie, ChartSerieDTO, CreateChartSerieDTO } from "./chartSerie";
import { ChartAxis, ChartAxisDTO, CreateChartAxisDTO } from "./chartAxis";

export class ChartPlot {
  id: string;
  chartId: string;
  yAxis?: ChartAxis;
  chartSeries: ChartSerie[];

  constructor(params: ChartPlotDTO) {
    this.id = params.id;
    this.chartId = params.chartId;
    this.yAxis = params.yAxis ? new ChartAxis(params.yAxis) : undefined;
    this.chartSeries = params.chartSeries.map(cts => new ChartSerie(cts));
  }
}

export interface ChartPlotDTO {
  id: string;
  chartId: string;
  yAxis?: ChartAxisDTO;
  chartSeries: ChartSerieDTO[];
}

export interface CreateChartPlotDTO {
  yAxis?: CreateChartAxisDTO;
  chartSeries: CreateChartSerieDTO[];
}