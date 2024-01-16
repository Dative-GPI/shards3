import { ChartValueRangeTranslation, ChartValueRangeTranslationDTO, CreateChartValueRangeTranslationDTO } from "./chartValueRangeTranslation";
import { ValueRange } from "../shared/valueRange";

export class ChartValueRange extends ValueRange {
    color: string;
    opacity: number;
    label: string;
    labelDefault: string;
    translations: ChartValueRangeTranslation[];

    constructor(params: ChartValueRangeDTO) {
        super(params);

        this.color = params.color;
        this.opacity = params.opacity;
        this.label = params.label;
        this.labelDefault = params.labelDefault;
        this.translations = params.translations.map(t => new ChartValueRangeTranslation(t));
    }
}

export interface ChartValueRangeDTO {
    startValue: number;
    endValue: number;
    color: string;
    opacity: number;
    label: string;
    labelDefault: string;
    translations: ChartValueRangeTranslationDTO[];
}

export interface CreateChartValueRangeDTO {
    startValue: number;
    endValue: number;
    color: string;
    opacity: number;
    labelDefault: string;
    translations: CreateChartValueRangeTranslationDTO[];
}