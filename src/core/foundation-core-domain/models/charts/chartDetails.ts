import { ChartVariable, ChartVariableDTO } from "./chartVariable";
import { ApplicationScope } from "../enums/applicationEnums";
import { ChartType, ColorSets } from "../enums/chartEnums";
import { ChartInfos, ChartInfosDTO } from "./chartInfos";
import { ChartTranslationDTO } from "./chartTranslation";
import { ChartAxis, ChartAxisDTO  } from "./chartAxis";
import { ChartModelLabelDTO } from "./chartModelLabel";
import { ChartPlot, ChartPlotDTO } from "./chartPlot";

export class ChartDetails extends ChartInfos {
  colorSet: ColorSets;
  colorSeed: string;
  xAxis?: ChartAxis | null;
  aggregates?: boolean | null;
  dynamicVariables?: boolean | null;
  chartVariables: ChartVariable[];
  chartPlots: ChartPlot[];

  constructor(params: ChartDetailsDTO) {
    super(params);
    
    this.colorSet = params.colorSet as ColorSets;
    this.colorSeed = params.colorSeed;
    this.xAxis = params.xAxis ?
      new ChartAxis(params.xAxis) : undefined;
    this.aggregates = params.aggregates;
    this.dynamicVariables = params.dynamicVariables;
    this.chartVariables = params.chartVariables.map(cv => new ChartVariable(cv));
    this.chartPlots = params.chartPlots.map(cp => new ChartPlot(cp));
  }
}

export interface ChartDetailsDTO extends ChartInfosDTO {
    id: string;
    scope: ApplicationScope;
    icon: string;
    code: string;
    tags: string[];
    multiple: boolean;
    chartType: ChartType;
    modelsLabels: ChartModelLabelDTO[];
    label: string;
    title: string;
    labelDefault: string;
    titleDefault: string;
    translations: ChartTranslationDTO[];
    colorSet: number;
    colorSeed: string;
    xAxis?: ChartAxisDTO | null;
    aggregates?: boolean | null;
    dynamicVariables?: boolean | null;
    chartVariables: ChartVariableDTO[];
    chartPlots: ChartPlotDTO[];
}