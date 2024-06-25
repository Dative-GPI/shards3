import type { ActionInfosDTO } from "./actionInfos";
import { ActionInfos } from "./actionInfos";

export class ActionDetails extends ActionInfos {
    constructor(params: ActionDetailsDTO) {
        super(params);
    }
}

export interface ActionDetailsDTO extends ActionInfosDTO {
}