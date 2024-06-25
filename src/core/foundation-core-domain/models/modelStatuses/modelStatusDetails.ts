import type { ModelStatusInfosDTO } from "./modelStatusInfos";
import { ModelStatusInfos } from "./modelStatusInfos";

export class ModelStatusDetails extends ModelStatusInfos {
  constructor(params: ModelStatusDetailsDTO) {
    super(params);
  }
}

export interface ModelStatusDetailsDTO extends ModelStatusInfosDTO {
}