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
  label: string;
  title: string;
  code: string;
  icon: string;
  tags: string[];
  multiple: boolean;
  chartType: ChartType;
  modelsLabels: ChartModelLabel[];

  constructor(params: ChartOrganisationTypeInfosDTO) {
    this.id = params.id;
    this.imageId = params.imageId;
    this.chartId = params.chartId;
    this.organisationTypeId = params.organisationTypeId;
    this.organisationTypeLabel = params.organisationTypeLabel;
    this.chartCategoryId = params.chartCategoryId;
    this.chartCategoryLabel = params.chartCategoryLabel;
    this.scope = params.scope;
    this.label = params.label;
    this.title = params.title;
    this.code = params.code;
    this.icon = params.icon;
    this.tags = params.tags.slice();
    this.multiple = params.multiple;
    this.chartType = params.chartType;
    this.modelsLabels = params.modelsLabels.map((modelLabel) => new ChartModelLabel(modelLabel));
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
  label: string;
  title: string;
  code: string;
  icon: string;
  imageId: string | null;
  tags: string[];
  multiple: boolean;
  chartType: ChartType;
  modelsLabels: ChartModelLabelDTO[];
}

export interface ChartOrganisationTypeFilters {
  modelsIds?: string[] | null;
  plotPer?: PlotPer | null;
  search?: string | null;
}