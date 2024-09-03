import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class DeviceStatusInfos {
  id: string;
  statuses: DeviceStatus[];

  constructor(params: DeviceStatusInfosDTO) {
    this.id = params.id;
    this.statuses = params.statuses.map(dto => new DeviceStatus(dto));
  }
}

export class DeviceStatus {
  modelStatusId: string;
  statusGroups: DeviceStatusGroup[];

  constructor(params: DeviceStatusDTO) {
    this.modelStatusId = params.modelStatusId;
    this.statusGroups = params.statusGroups.map(dto => new DeviceStatusGroup(dto));
  }
}

export class DeviceStatusGroup {
  sourceTimestamp: number | null;
  enqueuedTimestamp: number | null;
  processedTimestamp: number | null;
  groupByValue: string | null;
  value: string;
  unit: string | null;
  label: string;
  icon: string;
  color: string;

  constructor(params: DeviceStatusGroupDTO) {
    this.sourceTimestamp = params.sourceTimestamp ?
      isoToEpoch(params.sourceTimestamp) : null;
    this.enqueuedTimestamp = params.enqueuedTimestamp ?
      isoToEpoch(params.enqueuedTimestamp) : null;
    this.processedTimestamp = params.processedTimestamp ?
      isoToEpoch(params.processedTimestamp) : null;
    this.groupByValue = params.groupByValue;
    this.value = params.value;
    this.unit = params.unit;
    this.label = params.label;
    this.icon = params.icon;
    this.color = params.color;
  }
}

export interface DeviceStatusInfosDTO {
  id: string;
  statuses: DeviceStatusDTO[];
}

export interface DeviceStatusDTO {
  modelStatusId: string;
  statusGroups: DeviceStatusGroupDTO[];
}

export interface DeviceStatusGroupDTO {
  sourceTimestamp: string | null;
  enqueuedTimestamp: string | null;
  processedTimestamp: string | null;
  groupByValue: string | null;
  value: string;
  unit: string | null;
  label: string;
  icon: string;
  color: string;
}