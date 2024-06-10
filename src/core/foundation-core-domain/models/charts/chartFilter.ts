import { ChartFilterValue, ChartFilterValueDTO, CreateChartFilterValueDTO } from "./chartFilterValue";
import { FilterType } from "../enums/sharedEnums";

export class ChartFilter {
  id: string;
  dataDefinitionId: string;
  filterType: FilterType;
  filterValues: ChartFilterValue[];
  filterDynamic: boolean;

  constructor(params: ChartFilterDTO) {
    this.id = params.id;
    this.dataDefinitionId = params.dataDefinitionId;
    this.filterType = params.filterType as FilterType;
    this.filterValues = params.filterValues.map(fv => new ChartFilterValue(fv));
    this.filterDynamic = params.filterDynamic;
  }
}

export interface ChartFilterDTO {
  id: string;
  dataDefinitionId: string;
  filterType: number;
  filterValues: ChartFilterValueDTO[];
  filterDynamic: boolean;
}

export interface CreateChartFilterDTO {
  id: string;
  dataDefinitionId: string;
  filterType: FilterType;
  filterValues: CreateChartFilterValueDTO[];
  filterDynamic: boolean;
}