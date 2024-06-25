import type { ChartModifierDTO, CreateChartModifierDTO } from "./chartModifier";
import { ChartModifier } from "./chartModifier";
import type { ChartFilterDTO, CreateChartFilterDTO } from "./chartFilter";
import { ChartFilter } from "./chartFilter";
import type { AggregationType } from "../enums/chartEnums";

export class ChartOperand {
  id: string;
  name: string;
  aggregation?: AggregationType;
  modelId: string;
  modelLabel: string;
  dataCategoryId: string;
  dataDefinitionId?: string;
  xAxis?: ChartModifier;
  yAxis?: ChartModifier;
  firstModifier?: ChartModifier;
  secondModifier?: ChartModifier;
  filters: ChartFilter[];

  constructor(params: ChartOperandDTO) {
    this.id = params.id;
    this.name = params.name
    this.aggregation = (params.aggregation as AggregationType) ?? undefined;
    this.modelId = params.modelId;
    this.modelLabel = params.modelLabel;
    this.dataCategoryId = params.dataCategoryId;
    this.dataDefinitionId = params.dataDefinitionId;
    this.xAxis = params.xAxis ? new ChartModifier(params.xAxis) : undefined;
    this.yAxis = params.yAxis ? new ChartModifier(params.yAxis) : undefined;
    this.firstModifier = params.firstModifier ? new ChartModifier(params.firstModifier) : undefined;
    this.secondModifier = params.secondModifier ? new ChartModifier(params.secondModifier) : undefined;
    this.filters = params.filters.map(f => new ChartFilter(f));
  }
}

export interface ChartOperandDTO {
  id: string;
  name: string;
  aggregation?: number;
  modelId: string;
  modelLabel: string;
  dataCategoryId: string;
  dataDefinitionId?: string;
  xAxis?: ChartModifierDTO;
  yAxis?: ChartModifierDTO;
  firstModifier?: ChartModifierDTO;
  secondModifier?: ChartModifierDTO;
  filters: ChartFilterDTO[];
}

export interface CreateChartOperandDTO {
  name: string;
  aggregation?: number;
  modelId: string;
  dataCategoryId: string;
  dataDefinitionId?: string;
  xAxis?: CreateChartModifierDTO;
  yAxis?: CreateChartModifierDTO;
  firstModifier?: CreateChartModifierDTO;
  secondModifier?: CreateChartModifierDTO;
  filters: CreateChartFilterDTO[];
}