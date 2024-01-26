import { ConnectivityStatus } from "@dative-gpi/foundation-shared-domain/models";

export interface FSDeviceConnectivity {
    id: string;
    sourceTimestamp?: number;
    enqueuedTimestamp?: number;
    processedTimestamp?: number;
    status: ConnectivityStatus;
    icon: string;
    color: string;
}