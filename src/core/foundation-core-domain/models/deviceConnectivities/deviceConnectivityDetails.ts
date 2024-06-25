import type { DeviceConnectivityInfosDTO } from "./deviceConnectivityInfos";
import { DeviceConnectivityInfos } from "./deviceConnectivityInfos";

export class DeviceConnectivityDetails extends DeviceConnectivityInfos {
    constructor(params: DeviceConnectivityDetailsDTO) {
        super(params);
    }
}

export interface DeviceConnectivityDetailsDTO extends DeviceConnectivityInfosDTO {
}