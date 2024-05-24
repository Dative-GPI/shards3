import { ConnectivityStatus } from "@dative-gpi/foundation-shared-domain/models";
import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class DeviceConnectivityInfos {
    id: string;
    sourceTimestamp?: number;
    enqueuedTimestamp?: number;
    processedTimestamp?: number;
    status: ConnectivityStatus;
    icon: string;
    color: string;

    constructor(params: DeviceConnectivityInfosDTO) {
        this.id = params.id;
        this.sourceTimestamp = params.sourceTimestamp ? utcToEpoch(params.sourceTimestamp) : undefined;
        this.enqueuedTimestamp = params.enqueuedTimestamp ? utcToEpoch(params.enqueuedTimestamp) : undefined;
        this.processedTimestamp = params.processedTimestamp ? utcToEpoch(params.processedTimestamp) : undefined;
        this.status = params.status;
        this.icon = params.icon;
        this.color = params.color;
    }
}

export interface DeviceConnectivityInfosDTO {
    id: string;
    sourceTimestamp?: string;
    enqueuedTimestamp?: string;
    processedTimestamp?: string;
    status: ConnectivityStatus;
    icon: string;
    color: string;
}