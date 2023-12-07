export class DataCategoryInfos {
    id: string;
    modelId: string;
    code: string;
    label: string;
    correlated: boolean;
  
    constructor(params: DataCategoryInfosDTO) {
      this.id = params.id;
      this.modelId = params.modelId;
      this.code = params.code;
      this.label = params.label;
      this.correlated = params.correlated;
    }
  }
  
  export interface DataCategoryInfosDTO {
    id: string;
    modelId: string;
    code: string;
    label: string;
    correlated: boolean;
  }
  
  export interface DataCategoryFilters {
    modelId?: string;
    correlated?: boolean;
    search?: string;
  }