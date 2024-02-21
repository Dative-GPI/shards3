import { LayoutPageInfos, LayoutPageInfosDTO } from "./layoutPageInfos";

export class LayoutPageDetails extends LayoutPageInfos {
    constructor(params: LayoutPageDetailsDTO) {
        super(params);
    }
}

export interface LayoutPageDetailsDTO extends LayoutPageInfosDTO {
}