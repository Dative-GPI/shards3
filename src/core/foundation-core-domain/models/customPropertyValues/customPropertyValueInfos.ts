import { DatesTools } from "@dative-gpi/foundation-shared-services/tools";

export class CustomPropertyValueInfos {
    value: string;
    timestamp?: number;

    constructor(params: CustomPropertyValueInfosDTO) {
        this.value = params.value;
        this.timestamp = params.timestamp ? DatesTools.utcToEpoch(params.timestamp) : undefined;
    }
}

export interface CustomPropertyValueInfosDTO {
    value: string;
    timestamp?: string;
}