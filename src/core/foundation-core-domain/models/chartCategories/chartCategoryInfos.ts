
export class ChartCategoryInfos {
  id: string;
  label: string;
  code: string;

  constructor(params: ChartCategoryInfosDTO) {
    this.id = params.id;
    this.label = params.label;
    this.code = params.code;
  }
}

export interface ChartCategoryInfosDTO {
  id: string;
  label: string;
  code: string;
}

export interface ChartCategoryFilters {
  search?: string | null;
}