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
        this.sourceTimestamp = params.sourceTimestamp;
        this.enqueuedTimestamp = params.enqueuedTimestamp;
        this.processedTimestamp = params.processedTimestamp;
        this.status = params.status;
        this.icon = params.icon;
        this.color = params.color;
    }
}

export interface DeviceConnectivityInfosDTO {
    id: string;
    sourceTimestamp?: number;
    enqueuedTimestamp?: number;
    processedTimestamp?: number;
    status: ConnectivityStatus;
    icon: string;
    color: string;
}