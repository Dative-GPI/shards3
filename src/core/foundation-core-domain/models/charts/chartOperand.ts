import type { ChartModifierDTO, CreateChartModifierDTO } from "./chartModifier";
import { ChartModifier } from "./chartModifier";
import type { ChartFilterDTO, CreateChartFilterDTO } from "./chartFilter";
import { ChartFilter } from "./chartFilter";
import type { AggregationType } from "../enums/chartEnums";

export class ChartOperand {
  id: string;
  chartId : string;
  hiddenCode: string;
  chartSerieHiddenCode: string;
  name: string;
  aggregation?: AggregationType;
  modelId: string;
  modelLabel: string;
  dataCategoryId: string;
  dataDefinitionId?: string;
  xAxisModifierHiddenCode?: string;
  yAxisModifierHiddenCode?: string;
  firstModifierHiddenCode?: string;
  secondModifierHiddenCode?: string;
  index : number;

  constructor(params: ChartOperandDTO) {
    this.id = params.id;
    this.chartId = params.chartId;
    this.hiddenCode = params.hiddenCode;
    this.chartSerieHiddenCode = params.chartSerieHiddenCode;
    this.name = params.name
    this.aggregation = (params.aggregation as AggregationType) ?? undefined;
    this.modelId = params.modelId;
    this.modelLabel = params.modelLabel;
    this.dataCategoryId = params.dataCategoryId;
    this.dataDefinitionId = params.dataDefinitionId;
    this.xAxisModifierHiddenCode = params.xAxisModifierHiddenCode;
    this.yAxisModifierHiddenCode = params.yAxisModifierHiddenCode;
    this.firstModifierHiddenCode = params.firstModifierHiddenCode;
    this.secondModifierHiddenCode = params.secondModifierHiddenCode;
    this.index = params.index;
  }
}

export interface ChartOperandDTO {
  id: string;
  chartId : string;
  hiddenCode: string;
  chartSerieHiddenCode: string;
  name: string;
  aggregation?: number;
  modelId: string;
  modelLabel: string;
  dataCategoryId: string;
  dataDefinitionId?: string;
  xAxisModifierHiddenCode?: string;
  yAxisModifierHiddenCode?: string;
  firstModifierHiddenCode?: string;
  secondModifierHiddenCode?: string;
  index : number;
}

export interface CreateChartOperandDTO {
  hiddenCode: string;
  chartSerieHiddenCode: string;
  name: string;
  aggregation?: number;
  modelId: string;
  dataCategoryId: string;
  dataDefinitionId?: string;
  xAxisModifierHiddenCode?: string;
  yAxisModifierHiddenCode?: string;
  firstModifierHiddenCode?: string;
  secondModifierHiddenCode?: string;
}