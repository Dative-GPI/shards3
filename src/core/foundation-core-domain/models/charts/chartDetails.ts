import { ChartVariable, ChartVariableDTO } from "./chartVariable";
import { ChartInfos, ChartInfosDTO } from "./chartInfos";
import { ChartAxis, ChartAxisDTO } from "./chartAxis";
import { ChartPlot, ChartPlotDTO } from "./chartPlot";
import { ColorSets } from "../enums/chartEnums";

export class ChartDetails extends ChartInfos {
  colorSet: ColorSets;
  colorSeed: string;
  xAxis: ChartAxis | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  chartVariables: ChartVariable[];
  chartPlots: ChartPlot[];

  constructor(params: ChartDetailsDTO) {
    super(params);

    this.colorSet = params.colorSet as ColorSets;
    this.colorSeed = params.colorSeed;
    this.xAxis = params.xAxis ?
      new ChartAxis(params.xAxis) : null;
    this.aggregates = params.aggregates;
    this.dynamicVariables = params.dynamicVariables;
    this.chartVariables = params.chartVariables.map(cv => new ChartVariable(cv));
    this.chartPlots = params.chartPlots.map(cp => new ChartPlot(cp));
  }
}

export interface ChartDetailsDTO extends ChartInfosDTO {
  colorSet: number;
  colorSeed: string;
  xAxis: ChartAxisDTO | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  chartVariables: ChartVariableDTO[];
  chartPlots: ChartPlotDTO[];
}