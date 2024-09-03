import type { Criticity } from "@dative-gpi/foundation-shared-domain/models";
import type { ApplicationScope } from "../enums/applicationEnums";
import { ScenarioParameter, type ScenarioChartDTO, type ScenarioParameterDTO } from "../scenarios";
import { ScenarioChart } from "../scenarios";

export class ScenarioOrganisationInfos {
  id: string;
  scenarioId: string;
  organisationId: string;
  scope: ApplicationScope;
  modelId: string;
  modelLabel: string;
  dataCategoryId: string;
  dataCategoryLabel: string;
  dataDefinitionId: string;
  dataDefinitionLabel: string;
  criticity: Criticity;
  label: string;
  code: string;
  icon: string;
  tags: string[];
  startDate: string;
  endDate: string;
  charts: ScenarioChart[];
  parameters: ScenarioParameter[];

  constructor(params: ScenarioOrganisationInfosDTO) {
    this.id = params.id;
    this.scenarioId = params.scenarioId;
    this.organisationId = params.organisationId;
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
    this.startDate = params.startDate;
    this.endDate = params.endDate;
    this.tags = params.tags.slice();
    this.charts = params.charts.map(p => new ScenarioChart(p))
    this.parameters = params.parameters.map(p => new ScenarioParameter(p));
  }
}

export interface ScenarioOrganisationInfosDTO {
  id: string;
  scenarioId: string;
  organisationId: string;
  scope: number;
  modelId: string;
  modelLabel: string;
  dataCategoryId: string;
  dataCategoryLabel: string;
  dataDefinitionId: string;
  dataDefinitionLabel: string;
  criticity: number;
  label: string;
  code: string;
  icon: string;
  tags: string[];
  startDate: string;
  endDate: string;
  charts: ScenarioChartDTO[];
  parameters: ScenarioParameterDTO[];
}

export interface ScenarioOrganisationFilters {
  modelId?: string | null;
}