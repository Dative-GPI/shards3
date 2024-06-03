
export class ChartCategoryInfos {
  id: string;
  code: string;
  label: string;

  constructor(params: ChartCategoryInfosDTO) {
    this.id = params.id;
    this.code = params.code;
    this.label = params.label;
  }
}

export interface ChartCategoryInfosDTO {
  id: string;
  code: string;
  label: string;
}

export interface ChartCategoryFilters {
  code?: string;
  label?: string;
}