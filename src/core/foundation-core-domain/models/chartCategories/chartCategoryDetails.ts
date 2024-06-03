import { ChartCategoryInfos, ChartCategoryInfosDTO } from "./chartCategoryInfos";

export class ChartCategoryDetails extends ChartCategoryInfos {
  constructor(params: ChartCategoryDetailsDTO) {
    super(params);
  }
}

export interface ChartCategoryDetailsDTO extends ChartCategoryInfosDTO {
}

export interface CreateChartCategoryDTO {
  label: string;
  code: string;
}

export interface UpdateChartCategoryDTO {
  label: string;
  code: string;
}