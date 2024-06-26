import type { DataDefinitionMappingInfosDTO } from "./dataDefinitionMappingInfos";
import { DataDefinitionMappingInfos } from "./dataDefinitionMappingInfos";

export class DataDefinitionMappingDetails extends DataDefinitionMappingInfos {
    constructor(params: DataDefinitionMappingDetailsDTO) {
        super(params);
    }
}

export interface DataDefinitionMappingDetailsDTO extends DataDefinitionMappingInfosDTO {
}