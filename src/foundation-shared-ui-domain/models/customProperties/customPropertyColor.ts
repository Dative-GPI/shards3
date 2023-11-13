import { FilterType } from "../enums/filterEnums";

export class CustomPropertyColor {
    priority: number;
    filterType: FilterType;
    filterValues: string[];
    color: string;

    constructor(params: CustomPropertyColorDTO) {
        this.priority = params.priority;
        this.filterType = params.filterType;
        this.filterValues = params.filterValues.slice();
        this.color = params.color;
    }
}

export interface CustomPropertyColorDTO {
    priority: number;
    filterType: FilterType;
    filterValues: string[];
    color: string;
}