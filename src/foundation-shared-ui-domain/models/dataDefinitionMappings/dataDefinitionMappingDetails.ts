import { DataDefinitionMappingInfos, DataDefinitionMappingInfosDTO } from "./dataDefinitionMappingInfos";

export class DataDefinitionMappingDetails extends DataDefinitionMappingInfos {
    constructor(params: DataDefinitionMappingDetailsDTO) {
        super(params);
    }
}

export interface DataDefinitionMappingDetailsDTO extends DataDefinitionMappingInfosDTO {
}