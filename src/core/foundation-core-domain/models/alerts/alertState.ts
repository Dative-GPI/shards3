import { AlertDataDefinition, AlertDataDefinitionDTO } from "./alertDataDefinition";
import { AlertStatus } from "../enums/alertEnums";

export class AlertState {
    id: string;
    status: AlertStatus;
    sourceTimestamp: number;
    enqueuedTimestamp: number;
    processedTimestamp: number;
    metadataValues?: AlertDataDefinition[];

    constructor(params: AlertStateDTO) {
        this.id = params.id;
        this.status = params.status;
        this.sourceTimestamp = params.sourceTimestamp;
        this.enqueuedTimestamp = params.enqueuedTimestamp;
        this.processedTimestamp = params.processedTimestamp;
        this.metadataValues = params.metadataValues?.map(dto => new AlertDataDefinition(dto));
    }
}

export interface AlertStateDTO {
    id: string;
    status: AlertStatus;
    sourceTimestamp: number;
    enqueuedTimestamp: number;
    processedTimestamp: number;
    metadataValues?: AlertDataDefinitionDTO[];
}