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
  groupByValue: string;
  value: string;
  unit: string;
  label: string;
  icon: string;
  color: string;

  constructor(params: DeviceStatusGroupDTO) {
    this.sourceTimestamp = params.sourceTimestamp;
    this.enqueuedTimestamp = params.enqueuedTimestamp;
    this.processedTimestamp = params.processedTimestamp;
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
  sourceTimestamp?: number;
  enqueuedTimestamp?: number;
  processedTimestamp?: number;
  groupByValue: string;
  value: string;
  unit: string;
  label: string;
  icon: string;
  color: string;
}