import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

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
  sourceTimestamp?: number;
  enqueuedTimestamp?: number;
  processedTimestamp?: number;
  groupByValue?: string;
  value: string;
  unit?: string;
  label: string;
  icon: string;
  color: string;

  constructor(params: DeviceStatusGroupDTO) {
    this.sourceTimestamp = params.sourceTimestamp ? utcToEpoch(params.sourceTimestamp) : undefined;
    this.enqueuedTimestamp = params.enqueuedTimestamp ? utcToEpoch(params.enqueuedTimestamp) : undefined;
    this.processedTimestamp = params.processedTimestamp ? utcToEpoch(params.processedTimestamp) : undefined;
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
  sourceTimestamp?: string;
  enqueuedTimestamp?: string;
  processedTimestamp?: string;
  groupByValue?: string;
  value: string;
  unit?: string;
  label: string;
  icon: string;
  color: string;
}