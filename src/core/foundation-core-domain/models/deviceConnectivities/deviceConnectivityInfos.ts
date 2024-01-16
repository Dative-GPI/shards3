import { DatesTools } from "@dative-gpi/foundation-shared-services/tools";

import { ConnectivityStatus } from "../enums/deviceEnums";

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
        this.sourceTimestamp = params.sourceTimestamp ? DatesTools.utcToEpoch(params.sourceTimestamp) : undefined;
        this.enqueuedTimestamp = params.enqueuedTimestamp ? DatesTools.utcToEpoch(params.enqueuedTimestamp) : undefined;
        this.processedTimestamp = params.processedTimestamp ? DatesTools.utcToEpoch(params.processedTimestamp) : undefined;
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