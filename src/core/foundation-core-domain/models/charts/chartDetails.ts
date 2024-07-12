import type { ChartPresetFilterDTO } from "./chartPresetFilter";
import { ChartPresetFilter } from "./chartPresetFilter";
import type { ChartVariableDTO } from "./chartVariable";
import { ChartVariable } from "./chartVariable";
import type { ChartPresetDTO } from "./chartPreset";
import { ChartPreset } from "./chartPreset";
import type { ChartInfosDTO } from "./chartInfos";
import { ChartInfos } from "./chartInfos";
import type { ChartAxisDTO } from "./chartAxis";
import { ChartAxis } from "./chartAxis";
import type { ChartPlotDTO } from "./chartPlot";
import { ChartPlot } from "./chartPlot";
import { ChartSerie } from "./chartSerie";
import type { ChartSerieDTO } from "./chartSerie";
import { ChartOperand } from "./chartOperand";
import type { ChartOperandDTO } from "./chartOperand";
import { ChartModifier } from "./chartModifier";
import type { ChartModifierDTO } from "./chartModifier";
import { ChartFilter} from "./chartFilter";
import type { ChartFilterDTO } from "./chartFilter";

import type { ColorSets } from "../enums/chartEnums";

export class ChartDetails extends ChartInfos {
  colorSet: ColorSets;
  colorSeed: string;
  xAxis: ChartAxis | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  chartVariables: ChartVariable[];
  chartSeries: ChartSerie[];
  chartOperands: ChartOperand[];
  chartModifiers: ChartModifier[];
  chartFilters: ChartFilter[];
  yAxis: ChartAxis[];
  chartPresets: ChartPreset[];
  chartPresetFilters: ChartPresetFilter[];
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
    this.chartPresets = params.chartPresets.map(cp => new ChartPreset(cp));
    this.chartPresetFilters = params.chartPresetFilters.map(cpf => new ChartPresetFilter(cpf));
    this.chartPlots = params.chartPlots.map(cp => new ChartPlot(cp));
    this.chartSeries = params.chartSeries.map(cs => new ChartSerie(cs));
    this.chartOperands = params.chartOperands.map(co => new ChartOperand(co));
    this.chartModifiers = params.chartModifiers.map(cm => new ChartModifier(cm));
    this.chartFilters = params.chartFilters.map(cf => new ChartFilter(cf));
    this.yAxis = params.yAxis.map(ya => new ChartAxis(ya));
  }
}

export interface ChartDetailsDTO extends ChartInfosDTO {
  colorSet: number;
  colorSeed: string;
  xAxis: ChartAxisDTO | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  chartVariables: ChartVariableDTO[];
  chartPresets: ChartPresetDTO[];
  chartSeries: ChartSerieDTO[];
  chartOperands: ChartOperandDTO[];
  chartModifiers: ChartModifierDTO[];
  chartFilters: ChartFilterDTO[];
  yAxis: ChartAxisDTO[];
  chartPresetFilters: ChartPresetFilterDTO[];
  chartPlots: ChartPlotDTO[];
}