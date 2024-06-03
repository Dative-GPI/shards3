import { ChartTranslation, ChartTranslationDTO } from "./chartTranslation";
import { ChartModelLabel, ChartModelLabelDTO } from "./chartModelLabel";
import { ApplicationScope } from "../enums/applicationEnums";
import { ChartType } from "../enums/chartEnums";
import { ChartCategoryInfos } from "../chartCategories";

export class ChartInfos {
    id: string;
    scope: ApplicationScope;
    icon: string;
    code: string;
    chartCategoryId: string | null;
    imageId: string | null;
    tags: string[];
    multiple: boolean;
    chartType: ChartType;
    modelsLabels: ChartModelLabel[];
    label: string;
    title: string;
    labelDefault: string;
    titleDefault: string;
    chartCategory: ChartCategoryInfos | null;
    translations: ChartTranslation[];

    constructor(params: ChartInfosDTO) {
        this.id = params.id;
        this.scope = params.scope;
        this.icon = params.icon;
        this.code = params.code;
        this.chartCategoryId = params.chartCategoryId;
        this.imageId = params.imageId;
        this.tags = params.tags.slice();
        this.multiple = params.multiple;
        this.chartType = params.chartType;
        this.modelsLabels = params.modelsLabels.map((modelLabel) => new ChartModelLabel(modelLabel));
        this.label = params.label;
        this.title = params.title;
        this.labelDefault = params.labelDefault;
        this.titleDefault = params.titleDefault;
        this.chartCategory = params.chartCategory;
        this.translations = params.translations.map((translation) => new ChartTranslation(translation));
    }
}

export interface ChartInfosDTO {
    id: string;
    scope: ApplicationScope;
    icon: string;
    code: string;
    chartCategoryId: string | null;
    imageId: string | null;
    tags: string[];
    multiple: boolean;
    chartType: ChartType;
    modelsLabels: ChartModelLabelDTO[];
    label: string;
    title: string;
    labelDefault: string;
    titleDefault: string;
    chartCategory: ChartCategoryInfos | null;
    translations: ChartTranslationDTO[];
}