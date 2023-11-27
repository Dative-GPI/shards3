import { CustomPropertyInfos, CustomPropertyInfosDTO } from "./customPropertyInfos";

export class CustomPropertyDetails extends CustomPropertyInfos {
    constructor(params: CustomPropertyDetailsDTO) {
        super(params);
    }
}

export interface CustomPropertyDetailsDTO extends CustomPropertyInfosDTO {
    description: string;
}