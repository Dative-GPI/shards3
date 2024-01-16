import { SecuritySettingInfos, SecuritySettingInfosDTO } from "./securitySettingInfos";

export class SecuritySettingDetails extends SecuritySettingInfos {
    constructor(params: SecuritySettingDetailsDTO) {
        super(params);
    }
}

export interface SecuritySettingDetailsDTO extends SecuritySettingInfosDTO {
}