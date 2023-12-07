import { CustomPropertyValueInfos, CustomPropertyValueInfosDTO } from "./customPropertyValueInfos";

export class CustomPropertyValueDetails extends CustomPropertyValueInfos {
    constructor(params: CustomPropertyValueDetailsDTO) {
        super(params);
    }
}

export interface CustomPropertyValueDetailsDTO extends CustomPropertyValueInfosDTO {
}