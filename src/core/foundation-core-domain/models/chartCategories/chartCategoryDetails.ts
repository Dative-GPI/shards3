import { ChartCategoryInfos, ChartCategoryInfosDTO } from "./chartCategoryInfos";

export class ChartCategoryDetails extends ChartCategoryInfos {
  constructor(params: ChartCategoryDetailsDTO) {
    super(params);
  }
}

export interface ChartCategoryDetailsDTO extends ChartCategoryInfosDTO {
}

export interface CreateChartCategoryDTO {
  code: string;
  label: string;
}

export interface UpdateChartCategoryDTO {
  code: string;
  label: string;
}