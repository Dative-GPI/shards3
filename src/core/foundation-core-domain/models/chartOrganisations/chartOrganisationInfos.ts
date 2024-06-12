import { ChartTranslation, ChartTranslationDTO } from "../charts/chartTranslation";
import { ChartModelLabel, ChartModelLabelDTO } from "../charts/chartModelLabel";
import { ApplicationScope } from "../enums/applicationEnums";
import { ChartType, PlotPer } from "../enums/chartEnums";

export class ChartOrganisationInfos {
  id: string;
  imageId: string | null;
  chartId: string;
  organisationId: string;
  chartCategoryId: string | null;
  chartCategoryLabel: string | null;
  scope: ApplicationScope;
  label: string;
  labelDefault: string;
  title: string;
  titleDefault: string;
  code: string;
  icon: string;
  tags: string[];
  multiple: boolean;
  chartType: ChartType;
  modelsLabels: ChartModelLabel[];
  translations: ChartTranslation[];

  constructor(params: ChartOrganisationInfosDTO) {
    this.id = params.id;
    this.imageId = params.imageId;
    this.chartId = params.chartId;
    this.organisationId = params.organisationId;
    this.chartCategoryId = params.chartCategoryId;
    this.chartCategoryLabel = params.chartCategoryLabel;
    this.scope = params.scope;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.title = params.title;
    this.titleDefault = params.titleDefault;
    this.code = params.code;
    this.icon = params.icon;
    this.tags = params.tags.slice();
    this.multiple = params.multiple;
    this.chartType = params.chartType;
    this.modelsLabels = params.modelsLabels.map((modelLabel) => new ChartModelLabel(modelLabel));
    this.translations = params.translations.map((translation) => new ChartTranslation(translation));
  }
}

export interface ChartOrganisationInfosDTO {
  id: string;
  imageId: string | null;
  chartId: string;
  organisationId: string;
  chartCategoryId: string | null;
  chartCategoryLabel: string | null;
  scope: ApplicationScope;
  label: string;
  labelDefault: string;
  title: string;
  titleDefault: string;
  code: string;
  icon: string;
  tags: string[];
  multiple: boolean;
  chartType: ChartType;
  modelsLabels: ChartModelLabelDTO[];
  translations: ChartTranslationDTO[];
}

export interface ChartOrganisationFilters {
  modelsIds?: string[] | null;
  plotPer?: PlotPer | null;
  search?: string | null;
}