import type { CustomPropertyInfosDTO } from "./customPropertyInfos";
import { CustomPropertyInfos } from "./customPropertyInfos";

export class CustomPropertyDetails extends CustomPropertyInfos {
    constructor(params: CustomPropertyDetailsDTO) {
        super(params);
    }
}

export interface CustomPropertyDetailsDTO extends CustomPropertyInfosDTO {
    description: string;
}