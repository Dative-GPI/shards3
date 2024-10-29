import { ModelStatusInfos } from "./modelStatusInfos";
import type { ModelStatusInfosDTO } from "./modelStatusInfos";
import { StatusStateInfos, type StatusStateInfosDTO } from "./statusStateInfos";

export class ModelStatusDetails extends ModelStatusInfos {
  states: StatusStateInfos[];
  description: string;

  constructor(params: ModelStatusDetailsDTO) {
    super(params);
    this.states = params.states.map(state => new StatusStateInfos(state));
    this.description = params.description;
  }
}

export interface ModelStatusDetailsDTO extends ModelStatusInfosDTO {
  states: StatusStateInfosDTO[];
  description: string;
}