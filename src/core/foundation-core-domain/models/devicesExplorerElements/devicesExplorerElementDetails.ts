import { DevicesExplorerElementInfos, type DevicesExplorerElementInfosDTO } from "./devicesExplorerElementInfos";

export class DevicesExplorerElementDetails extends DevicesExplorerElementInfos {

  constructor(params: DevicesExplorerElementDetailsDTO) {
    super(params);
  }
}

export interface DevicesExplorerElementDetailsDTO extends DevicesExplorerElementInfosDTO {
}