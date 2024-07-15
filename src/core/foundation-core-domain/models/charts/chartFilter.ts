import type { ChartFilterValueDTO, CreateChartFilterValueDTO } from "./chartFilterValue";
import { ChartFilterValue } from "./chartFilterValue";
import type { ChartFilterTranslationDTO } from "./chartFilterTranslation";
import { ChartFilterTranslation } from "./chartFilterTranslation";
import type { FilterType } from "../enums/sharedEnums";

export class ChartFilter {
  id: string;
  chartId : string;
  hiddenCode: string;
  chartOperandHiddenCode : string;
  dataDefinitionId: string;
  label: string;
  labelDefault: string;
  filterType: FilterType;
  filterValues: ChartFilterValue[];
  filterDynamic: boolean;
  translations: ChartFilterTranslation[];

  constructor(params: ChartFilterDTO) {
    this.id = params.id;
    this.chartId = params.chartId;
    this.hiddenCode = params.hiddenCode;
    this.chartOperandHiddenCode = params.chartOperandHiddenCode
    this.dataDefinitionId = params.dataDefinitionId;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.filterType = params.filterType as FilterType;
    this.filterValues = params.filterValues.map(fv => new ChartFilterValue(fv));
    this.filterDynamic = params.filterDynamic;
    this.translations = params.translations.map(t => new ChartFilterTranslation(t));
  }
}

export interface ChartFilterDTO {
  id: string;
  chartId : string;
  hiddenCode: string;
  chartOperandHiddenCode : string;
  dataDefinitionId: string;
  label: string;
  labelDefault: string;
  filterType: number;
  filterValues: ChartFilterValueDTO[];
  filterDynamic: boolean;
  translations: ChartFilterTranslationDTO[];
}

export interface CreateChartFilterDTO {
  id: string;
  hiddenCode: string;
  chartOperandHiddenCode : string;
  dataDefinitionId: string;
  labelDefault: string;
  filterType: FilterType;
  filterValues: CreateChartFilterValueDTO[];
  filterDynamic: boolean;
  translations: ChartFilterTranslationDTO[];

}