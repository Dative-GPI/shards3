import { ConnectivityStatus } from "@dative-gpi/foundation-shared-domain/models";
import { DatesTools } from "@dative-gpi/foundation-shared-domain/tools";

export class DeviceConnectivityInfos {
  id: string;
  sourceTimestamp: number | null;
  enqueuedTimestamp: number | null;
  processedTimestamp: number | null;
  status: ConnectivityStatus;
  icon: string;
  color: string;

  constructor(params: DeviceConnectivityInfosDTO) {
    this.id = params.id;
    this.sourceTimestamp = params.sourceTimestamp ?
      DatesTools.utcToEpoch(params.sourceTimestamp) : null;
    this.enqueuedTimestamp = params.enqueuedTimestamp ?
      DatesTools.utcToEpoch(params.enqueuedTimestamp) : null;
    this.processedTimestamp = params.processedTimestamp ?
      DatesTools.utcToEpoch(params.processedTimestamp) : null;
    this.status = params.status;
    this.icon = params.icon;
    this.color = params.color;
  }
}

export interface DeviceConnectivityInfosDTO {
  id: string;
  sourceTimestamp: string | null;
  enqueuedTimestamp: string | null;
  processedTimestamp: string | null;
  status: ConnectivityStatus;
  icon: string;
  color: string;
}