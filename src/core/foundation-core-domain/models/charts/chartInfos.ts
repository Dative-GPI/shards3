import { ChartTranslation, ChartTranslationDTO } from "./chartTranslation";
import { ChartModelLabel, ChartModelLabelDTO } from "./chartModelLabel";
import { ApplicationScope } from "../enums/applicationEnums";
import { ChartType } from "../enums/chartEnums";

export class ChartInfos {
    id: string;
    imageId: string | null;
    chartCategoryId: string | null;
    chartCategoryLabel: string | null;
    scope: ApplicationScope;
    icon: string;
    code: string;
    tags: string[];
    multiple: boolean;
    chartType: ChartType;
    modelsLabels: ChartModelLabel[];
    label: string;
    title: string;
    labelDefault: string;
    titleDefault: string;
    translations: ChartTranslation[];

    constructor(params: ChartInfosDTO) {
        this.id = params.id;
        this.imageId = params.imageId;
        this.chartCategoryId = params.chartCategoryId;
        this.chartCategoryLabel = params.chartCategoryLabel;
        this.scope = params.scope;
        this.icon = params.icon;
        this.code = params.code;
        this.tags = params.tags.slice();
        this.multiple = params.multiple;
        this.chartType = params.chartType;
        this.modelsLabels = params.modelsLabels.map((modelLabel) => new ChartModelLabel(modelLabel));
        this.label = params.label;
        this.title = params.title;
        this.labelDefault = params.labelDefault;
        this.titleDefault = params.titleDefault;
        this.translations = params.translations.map((translation) => new ChartTranslation(translation));
    }
}

export interface ChartInfosDTO {
    id: string;
    imageId: string | null;
    chartCategoryId: string | null;
    chartCategoryLabel: string | null;
    scope: ApplicationScope;
    icon: string;
    code: string;
    tags: string[];
    multiple: boolean;
    chartType: ChartType;
    modelsLabels: ChartModelLabelDTO[];
    label: string;
    title: string;
    labelDefault: string;
    titleDefault: string;
    translations: ChartTranslationDTO[];
}