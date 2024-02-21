import { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/models";
import { DatesTools } from "@dative-gpi/foundation-shared-services/tools";

export class DeviceOrganisationAlert {
    id: string;
    label: string;
    status: AlertStatus;
    criticity: Criticity;
    sourceTimestamp?: number;
    enqueuedTimestamp?: number;

  constructor(params: DeviceOrganisationAlertDTO) {
    this.id = params.id;
    this.label = params.label;
    this.status = params.status;
    this.criticity = params.criticity;
    this.sourceTimestamp = params.sourceTimestamp ? DatesTools.utcToEpoch(params.sourceTimestamp) : undefined;
    this.enqueuedTimestamp = params.enqueuedTimestamp ? DatesTools.utcToEpoch(params.enqueuedTimestamp) : undefined;
  }
}

export interface DeviceOrganisationAlertDTO {
  id: string;
  label: string;
  status: AlertStatus;
  criticity: Criticity;
  sourceTimestamp?: string;
  enqueuedTimestamp?: string;
}