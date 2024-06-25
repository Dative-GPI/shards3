import type { CustomPropertyValueInfosDTO } from "./customPropertyValueInfos";
import { CustomPropertyValueInfos } from "./customPropertyValueInfos";

export class CustomPropertyValueDetails extends CustomPropertyValueInfos {
    constructor(params: CustomPropertyValueDetailsDTO) {
        super(params);
    }
}

export interface CustomPropertyValueDetailsDTO extends CustomPropertyValueInfosDTO {
}