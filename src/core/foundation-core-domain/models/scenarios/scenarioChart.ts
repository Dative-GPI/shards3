import type { ApplicationScope } from "../enums/applicationEnums";

export class ScenarioChart {
  id: string;
  chartId: string;
  scope: ApplicationScope;
  index: number;


  constructor(params: ScenarioChartDTO) {
    this.id = params.id;
    this.chartId = params.chartId;
    this.scope = params.scope;
    this.index = params.index;
  }
}

export interface ScenarioChartDTO {
  id: string;
  chartId: string;
  scope: ApplicationScope;
  index: number;
}

export interface CreateScenarioChartDTO {
  id: string;
  chartId: string;
  scope: ApplicationScope;
  index: number;
}