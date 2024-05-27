import { AlertStatus } from "@dative-gpi/foundation-shared-domain/models";
import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

import { DeviceConnectivityInfos, DeviceConnectivityInfosDTO } from "../deviceConnectivities/deviceConnectivityInfos";

export class ConnectivityAlertInfos {
  id: string;
  deviceId: string;
  organisationId: string;
  deviceOrganisationId: string;
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
    this.deviceOrganisationLabel = params.deviceOrganisationLabel;
    this.deviceOrganisationImageId = params.deviceOrganisationImageId;
    this.deviceOrganisationConnectivity = params.deviceOrganisationConnectivity ?
      new DeviceConnectivityInfos({ ...params.deviceOrganisationConnectivity, id: params.deviceOrganisationId }) : null;
    this.triggerProcessedTimestamp = utcToEpoch(params.triggerProcessedTimestamp);
    this.resolveProcessedTimestamp = params.resolveProcessedTimestamp ?
      utcToEpoch(params.resolveProcessedTimestamp) : null;
    this.status = params.status;
  }
}

export interface ConnectivityAlertInfosDTO {
  id: string;
  deviceId: string;
  organisationId: string;
  deviceOrganisationId: string;
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