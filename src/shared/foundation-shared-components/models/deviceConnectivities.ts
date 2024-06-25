import type { ConnectivityStatus } from "@dative-gpi/foundation-shared-domain/models";

export interface FSDeviceConnectivity {
    id: string;
    sourceTimestamp?: number | null;
    enqueuedTimestamp?: number | null;
    processedTimestamp?: number | null;
    status: ConnectivityStatus;
    icon: string;
    color: string;
}