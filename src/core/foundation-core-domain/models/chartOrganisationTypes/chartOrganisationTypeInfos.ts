import { ChartTranslation, ChartTranslationDTO } from "../charts/chartTranslation";
import { ChartModelLabel, ChartModelLabelDTO } from "../charts/chartModelLabel";
import { ApplicationScope } from "../enums/applicationEnums";
import { ChartType, PlotPer } from "../enums/chartEnums";

export class ChartOrganisationTypeInfos {
    id: string;
    imageId: string | null;
    chartId: string;
    organisationTypeId: string;
    organisationTypeLabel: string;
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

    constructor(params: ChartOrganisationTypeInfosDTO) {
        this.id = params.id;
        this.imageId = params.imageId;
        this.chartId = params.chartId;
        this.organisationTypeId = params.organisationTypeId;
        this.organisationTypeLabel = params.organisationTypeLabel;
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

export interface ChartOrganisationTypeInfosDTO {
    id: string;
    chartId: string;
    organisationTypeId: string;
    organisationTypeLabel: string;
    chartCategoryId: string | null;
    chartCategoryLabel: string | null;
    scope: ApplicationScope;
    icon: string;
    code: string;
    imageId: string | null;
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

export interface ChartOrganisationTypeFilters {
    modelsIds?: string[] | null;
    plotPer?: PlotPer;
    search?: string | null;
}