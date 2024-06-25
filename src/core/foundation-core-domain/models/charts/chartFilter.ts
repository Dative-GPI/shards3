import type { ChartFilterValueDTO, CreateChartFilterValueDTO } from "./chartFilterValue";
import { ChartFilterValue } from "./chartFilterValue";
import type { ChartFilterTranslationDTO } from "./chartFilterTranslation";
import { ChartFilterTranslation } from "./chartFilterTranslation";
import type { ChartPresetFilterDTO } from "./chartPresetFilter";
import { ChartPresetFilter } from "./chartPresetFilter";
import type { FilterType } from "../enums/sharedEnums";

export class ChartFilter {
  id: string;
  dataDefinitionId: string;
  label: string;
  labelDefault: string;
  filterType: FilterType;
  filterValues: ChartFilterValue[];
  filterDynamic: boolean;
  chartPresets: ChartPresetFilter[];
  translations: ChartFilterTranslation[];

  constructor(params: ChartFilterDTO) {
    this.id = params.id;
    this.dataDefinitionId = params.dataDefinitionId;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.filterType = params.filterType as FilterType;
    this.filterValues = params.filterValues.map(fv => new ChartFilterValue(fv));
    this.filterDynamic = params.filterDynamic;
    this.chartPresets = params.chartPresets.map(cp => new ChartPresetFilter(cp));
    this.translations = params.translations.map(t => new ChartFilterTranslation(t));
  }
}

export interface ChartFilterDTO {
  id: string;
  dataDefinitionId: string;
  label: string;
  labelDefault: string;
  filterType: number;
  filterValues: ChartFilterValueDTO[];
  filterDynamic: boolean;
  chartPresets: ChartPresetFilterDTO[];
  translations: ChartFilterTranslationDTO[];
}

export interface CreateChartFilterDTO {
  id: string;
  dataDefinitionId: string;
  labelDefault: string;
  filterType: FilterType;
  filterValues: CreateChartFilterValueDTO[];
  filterDynamic: boolean;
  translations: ChartFilterTranslationDTO[];

}