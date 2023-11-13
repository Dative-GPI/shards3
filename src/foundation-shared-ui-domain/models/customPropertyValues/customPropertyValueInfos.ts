export class CustomPropertyValueInfos {
    value: string;
    timestamp?: number;

    constructor(params: CustomPropertyValueInfosDTO) {
        this.value = params.value;
        this.timestamp = params.timestamp;
    }
}

export interface CustomPropertyValueInfosDTO {
    value: string;
    timestamp?: number;
}