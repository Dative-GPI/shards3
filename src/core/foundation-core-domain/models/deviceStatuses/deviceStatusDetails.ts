import { DeviceStatusInfos, DeviceStatusInfosDTO } from "./deviceStatusInfos";

export class DeviceStatusDetails extends DeviceStatusInfos {
    constructor(params: DeviceStatusDetailsDTO) {
        super(params);
    }
}

export interface DeviceStatusDetailsDTO extends DeviceStatusInfosDTO {
}