import { ModelInfos, ModelInfosDTO } from "./modelInfos";

export class ModelDetails extends ModelInfos {
    constructor(params: ModelDetailsDTO) {
        super(params);
    }
}

export interface ModelDetailsDTO extends ModelInfosDTO {
}