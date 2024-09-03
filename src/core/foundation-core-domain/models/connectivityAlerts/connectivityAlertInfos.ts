import type { AlertStatus } from "@dative-gpi/foundation-shared-domain/enums";
import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

import type { DeviceConnectivityInfosDTO } from "../deviceConnectivities/deviceConnectivityInfos";
import { DeviceConnectivityInfos } from "../deviceConnectivities/deviceConnectivityInfos";

export class ConnectivityAlertInfos {
  id: string;
  deviceId: string;
  organisationId: string;
  deviceOrganisationId: string;
  deviceOrganisationCode: string;
  deviceOrganisationLabel: string;
  deviceOrganisationImageId: string | null;
  deviceOrganisationConnectivity: DeviceConnectivityInfos | null;
  triggerProcessedTimestamp: number;
  resolveProcessedTimestamp: number | null;
  status: AlertStatus;

  constructor(params: ConnectivityAlertInfosDTO) {
    this.id = params.id;
    this.deviceId = params.deviceId;
    this.organisationId = params.organisationId;
    this.deviceOrganisationId = params.deviceOrganisationId;
    this.deviceOrganisationCode = params.deviceOrganisationCode;
    this.deviceOrganisationLabel = params.deviceOrganisationLabel;
    this.deviceOrganisationImageId = params.deviceOrganisationImageId;
    this.deviceOrganisationConnectivity = params.deviceOrganisationConnectivity ?
      new DeviceConnectivityInfos({ ...params.deviceOrganisationConnectivity, id: params.deviceOrganisationId }) : null;
    this.triggerProcessedTimestamp = isoToEpoch(params.triggerProcessedTimestamp);
    this.resolveProcessedTimestamp = params.resolveProcessedTimestamp ?
      isoToEpoch(params.resolveProcessedTimestamp) : null;
    this.status = params.status;
  }
}

export interface ConnectivityAlertInfosDTO {
  id: string;
  deviceId: string;
  organisationId: string;
  deviceOrganisationId: string;
  deviceOrganisationCode: string;
  deviceOrganisationLabel: string;
  deviceOrganisationImageId: string | null;
  deviceOrganisationConnectivity: DeviceConnectivityInfosDTO | null;
  triggerProcessedTimestamp: string;
  resolveProcessedTimestamp: string | null;
  status: AlertStatus;
}

export interface ConnectivityAlertFilters {
  deviceOrganisationId?: string | null;
  startDate?: string | null;
  endDate?: string | null;
}