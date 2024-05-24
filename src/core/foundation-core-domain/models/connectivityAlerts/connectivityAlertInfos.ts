import { AlertStatus } from "@dative-gpi/foundation-shared-domain/models";
import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

import { DeviceConnectivityInfos, DeviceConnectivityInfosDTO } from "../deviceConnectivities/deviceConnectivityInfos";

export class ConnectivityAlertInfos {
  id: string;
  deviceId: string;
  organisationId: string;
  deviceOrganisationId: string;
  deviceOrganisationLabel: string;
  deviceOrganisationImageId?: string;
  deviceOrganisationImageBlurHash?: string;
  deviceOrganisationImageHeight?: number;
  deviceOrganisationImageWidth?: number;
  deviceOrganisationConnectivity?: DeviceConnectivityInfos;
  triggerProcessedTimestamp: number;
  resolveProcessedTimestamp?: number;
  status: AlertStatus;

  constructor(params: ConnectivityAlertInfosDTO) {
    this.id = params.id;
    this.deviceId = params.deviceId;
    this.organisationId = params.organisationId;
    this.deviceOrganisationId = params.deviceOrganisationId;
    this.deviceOrganisationLabel = params.deviceOrganisationLabel;
    this.deviceOrganisationImageId = params.deviceOrganisationImageId;
    this.deviceOrganisationImageBlurHash = params.deviceOrganisationImageBlurHash;
    this.deviceOrganisationImageHeight = params.deviceOrganisationImageHeight;
    this.deviceOrganisationImageWidth = params.deviceOrganisationImageWidth;
    this.deviceOrganisationConnectivity = params.deviceOrganisationConnectivity != null ?
      new DeviceConnectivityInfos({ ...params.deviceOrganisationConnectivity, id: params.deviceOrganisationId }) :
      undefined;
    this.triggerProcessedTimestamp = utcToEpoch(params.triggerProcessedTimestamp);
    this.resolveProcessedTimestamp = params.resolveProcessedTimestamp ? utcToEpoch(params.resolveProcessedTimestamp) : undefined;
    this.status = params.status;
  }
}

export interface ConnectivityAlertInfosDTO {
  id: string;
  deviceId: string;
  organisationId: string;
  deviceOrganisationId: string;
  deviceOrganisationLabel: string;
  deviceOrganisationImageId?: string;
  deviceOrganisationImageBlurHash?: string;
  deviceOrganisationImageHeight?: number;
  deviceOrganisationImageWidth?: number;
  deviceOrganisationConnectivity?: DeviceConnectivityInfosDTO;
  triggerProcessedTimestamp: string;
  resolveProcessedTimestamp?: string;
  status: AlertStatus;
}

export interface ConnectivityAlertFilters {
  deviceOrganisationId?: string;
  startDate?: string;
  endDate?: string;
}