import type { ModelInfosDTO } from "./modelInfos";
import { ModelInfos } from "./modelInfos";

export class ModelDetails extends ModelInfos {
    constructor(params: ModelDetailsDTO) {
        super(params);
    }
}

export interface ModelDetailsDTO extends ModelInfosDTO {
}