import { AlertStatus, Criticity } from "../enums/alertEnums";

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
    this.sourceTimestamp = params.sourceTimestamp;
    this.enqueuedTimestamp = params.enqueuedTimestamp;
  }
}

export interface DeviceOrganisationAlertDTO {
  id: string;
  label: string;
  status: AlertStatus;
  criticity: Criticity;
  sourceTimestamp?: number;
  enqueuedTimestamp?: number;
}