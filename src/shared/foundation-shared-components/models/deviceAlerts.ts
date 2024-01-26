import { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/models";

export interface FSDeviceAlert {
    id: string;
    label: string;
    status: AlertStatus;
    criticity: Criticity;
    sourceTimestamp?: number;
    enqueuedTimestamp?: number;
}