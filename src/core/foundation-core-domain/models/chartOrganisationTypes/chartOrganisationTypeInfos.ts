import type { ChartModelLabelDTO } from "../charts/chartModelLabel";
import { ChartModelLabel } from "../charts/chartModelLabel";
import type { ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";
import type { ChartType, PlotPer } from "@dative-gpi/foundation-shared-domain/enums";

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
  draft: boolean;
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
    this.draft = params.draft;
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
  draft: boolean;
  imageId: string | null;
  tags: string[];
  multiple: boolean;
  chartType: ChartType;
  modelsLabels: ChartModelLabelDTO[];
}

export interface ChartOrganisationTypeFilters {
  modelsIds?: string[] | null;
  plotPers?: PlotPer[] | null;
  search?: string | null;
  draft?: boolean | null;
  deprecatedChartId?: string | null;
  deviceOrganisationsIds?: string[] | null
}