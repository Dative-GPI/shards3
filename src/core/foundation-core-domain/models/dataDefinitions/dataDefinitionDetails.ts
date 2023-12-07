import { DataDefinitionInfos, DataDefinitionInfosDTO } from "./dataDefinitionInfos";

export class DataDefinitionDetails extends DataDefinitionInfos {
    constructor(params: DataDefinitionDetailsDTO) {
        super(params);
    }
}

export interface DataDefinitionDetailsDTO extends DataDefinitionInfosDTO {
}