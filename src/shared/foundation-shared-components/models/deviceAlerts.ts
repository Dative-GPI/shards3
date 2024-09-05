import type { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/enums";

export interface FSDeviceAlert {
    id: string;
    label: string;
    status: AlertStatus;
    criticity: Criticity;
    sourceTimestamp?: number | null;
    enqueuedTimestamp?: number | null;
}