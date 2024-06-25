import type { DataDefinitionInfosDTO } from "./dataDefinitionInfos";
import { DataDefinitionInfos } from "./dataDefinitionInfos";

export class DataDefinitionDetails extends DataDefinitionInfos {
    constructor(params: DataDefinitionDetailsDTO) {
        super(params);
    }
}

export interface DataDefinitionDetailsDTO extends DataDefinitionInfosDTO {
}