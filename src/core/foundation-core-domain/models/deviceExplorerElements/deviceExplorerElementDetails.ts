import { DeviceExplorerElementInfos, type DeviceExplorerElementInfosDTO } from "./deviceExplorerElementInfos";

export class DeviceExplorerElementDetails extends DeviceExplorerElementInfos {

  constructor(params: DeviceExplorerElementDetailsDTO) {
    super(params);
  }
}

export interface DeviceExplorerElementDetailsDTO extends DeviceExplorerElementInfosDTO {
}