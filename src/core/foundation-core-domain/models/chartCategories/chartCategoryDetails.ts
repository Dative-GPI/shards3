import type { ChartCategoryTranslationDTO } from "./chartCategoryTranslation";
import { ChartCategoryTranslation } from "./chartCategoryTranslation";
import type { ChartCategoryInfosDTO } from "./chartCategoryInfos";
import { ChartCategoryInfos } from "./chartCategoryInfos";

export class ChartCategoryDetails extends ChartCategoryInfos {
  labelDefault: string;
  translations: ChartCategoryTranslation[];

  constructor(params: ChartCategoryDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.translations = params.translations.map(t => new ChartCategoryTranslation(t));
  }
}

export interface ChartCategoryDetailsDTO extends ChartCategoryInfosDTO {
  labelDefault: string;
  translations: ChartCategoryTranslationDTO[];
}

export interface CreateChartCategoryDTO {
  labelDefault: string;
  code: string;
  translations: ChartCategoryTranslationDTO[];
}

export interface UpdateChartCategoryDTO {
  labelDefault: string;
  code: string;
  translations: ChartCategoryTranslationDTO[];
}