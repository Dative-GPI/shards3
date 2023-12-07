export class DeviceOrganisationOption {
    id: number;
    key: string;
    value: string;
    keyLabel: string;
    valueLabel: string;
  
    constructor(params: DeviceOrganisationOptionDTO) {
        this.id = params.id;
        this.key = params.key;
        this.value = params.value;
        this.keyLabel = params.keyLabel;
        this.valueLabel = params.valueLabel;
    }
}
  
export interface DeviceOrganisationOptionDTO {
    id: number;
    key: string;
    value: string;
    keyLabel: string;
    valueLabel: string;
}