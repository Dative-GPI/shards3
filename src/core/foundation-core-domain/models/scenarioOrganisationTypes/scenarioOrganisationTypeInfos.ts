import type { Criticity, ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";

import { ScenarioChart, ScenarioParameter, type ScenarioChartDTO, type ScenarioParameterDTO } from "../scenarios";

export class ScenarioOrganisationTypeInfos {
  id: string;
  scenarioId: string;
  organisationTypeId: string | null;
  organisationTypeLabel: string | null;
  scope: ApplicationScope;
  modelId: string | null;
  modelLabel: string;
  dataCategoryId: string | null;
  dataCategoryLabel: string;
  dataDefinitionId: string | null;
  dataDefinitionLabel: string;
  criticity: Criticity;
  label: string;
  code: string;
  icon: string;
  draft: boolean;
  tags: string[];
  chartStartDate: string;
  chartEndDate: string;
  charts: ScenarioChart[];
  parameters: ScenarioParameter[];

  constructor(params: ScenarioOrganisationTypeInfosDTO) {
    this.id = params.id;
    this.scenarioId = params.scenarioId;
    this.organisationTypeId = params.organisationTypeId;
    this.organisationTypeLabel = params.organisationTypeLabel;
    this.scope = params.scope as ApplicationScope;
    this.modelId = params.modelId;
    this.modelLabel = params.modelLabel;
    this.dataCategoryId = params.dataCategoryId;
    this.dataCategoryLabel = params.dataCategoryLabel;
    this.dataDefinitionId = params.dataDefinitionId;
    this.dataDefinitionLabel = params.dataDefinitionLabel;
    this.criticity = params.criticity as Criticity;
    this.label = params.label;
    this.code = params.code;
    this.icon = params.icon;
    this.draft = params.draft;
    this.chartStartDate = params.chartStartDate;
    this.chartEndDate = params.chartEndDate;
    this.tags = params.tags.slice();
    this.charts = params.charts.map(p => new ScenarioChart(p))
    this.parameters = params.parameters.map(p => new ScenarioParameter(p));
  }
}

export interface ScenarioOrganisationTypeInfosDTO {
  id: string;
  scenarioId: string;
  organisationTypeId: string | null;
  organisationTypeLabel: string | null;
  scope: number;
  modelId: string | null;
  modelLabel: string;
  dataCategoryId: string | null;
  dataCategoryLabel: string;
  dataDefinitionId: string | null;
  dataDefinitionLabel: string;
  criticity: number;
  label: string;
  code: string;
  icon: string;
  draft: boolean;
  tags: string[];
  chartStartDate: string;
  chartEndDate: string;
  charts: ScenarioChartDTO[];
  parameters: ScenarioParameterDTO[];
}

export interface ScenarioOrganisationTypeFilters {
  modelId?: string | null;
  draft?: boolean | null;
}