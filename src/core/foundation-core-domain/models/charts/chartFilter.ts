import { ChartFilterValue, ChartFilterValueDTO, CreateChartFilterValueDTO } from "./chartFilterValue";
import { FilterType } from "../enums/sharedEnums";

export class ChartFilter {
  dataDefinitionId: string;
  filterType: FilterType;
  filterValues: ChartFilterValue[];
  filterDynamic: boolean;

  constructor(params: ChartFilterDTO) {
    this.dataDefinitionId = params.dataDefinitionId;
    this.filterType = params.filterType as FilterType;
    this.filterValues = params.filterValues.map(fv => new ChartFilterValue(fv));
    this.filterDynamic = params.filterDynamic;
  }
}

export interface ChartFilterDTO {
  dataDefinitionId: string;
  filterType: number;
  filterValues: ChartFilterValueDTO[];
  filterDynamic: boolean;
}

export interface CreateChartFilterDTO {
  dataDefinitionId: string;
  filterType: FilterType;
  filterValues: CreateChartFilterValueDTO[];
  filterDynamic: boolean;
}