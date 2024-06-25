import type { DataCategoryInfosDTO } from "./dataCategoryInfos";
import { DataCategoryInfos } from "./dataCategoryInfos";

export class DataCategoryDetails extends DataCategoryInfos {
  constructor(params: DataCategoryDetailsDTO) {
    super(params);
  }
}

export interface DataCategoryDetailsDTO extends DataCategoryInfosDTO {
}