import { AlertStatus } from "@dative-gpi/foundation-shared-domain/models";
import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

import { AlertDataDefinition, AlertDataDefinitionDTO } from "./alertDataDefinition";

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
        this.sourceTimestamp = utcToEpoch(params.sourceTimestamp);
        this.enqueuedTimestamp = utcToEpoch(params.enqueuedTimestamp);
        this.processedTimestamp = utcToEpoch(params.processedTimestamp);
        this.metadataValues = params.metadataValues?.map(dto => new AlertDataDefinition(dto));
    }
}

export interface AlertStateDTO {
    id: string;
    status: AlertStatus;
    sourceTimestamp: string;
    enqueuedTimestamp: string;
    processedTimestamp: string;
    metadataValues?: AlertDataDefinitionDTO[];
}