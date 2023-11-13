import { DataCategoryInfos, DataCategoryInfosDTO } from "./dataCategoryInfos";

export class DataCategoryDetails extends DataCategoryInfos {
  constructor(params: DataCategoryDetailsDTO) {
    super(params);
  }
}

export interface DataCategoryDetailsDTO extends DataCategoryInfosDTO {
}