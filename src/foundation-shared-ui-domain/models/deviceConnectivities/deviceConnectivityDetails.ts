import { DeviceConnectivityInfos, DeviceConnectivityInfosDTO } from "./deviceConnectivityInfos";

export class DeviceConnectivityDetails extends DeviceConnectivityInfos {
    constructor(params: DeviceConnectivityDetailsDTO) {
        super(params);
    }
}

export interface DeviceConnectivityDetailsDTO extends DeviceConnectivityInfosDTO {
}