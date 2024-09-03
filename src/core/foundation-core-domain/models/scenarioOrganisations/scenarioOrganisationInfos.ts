import type { Criticity } from "@dative-gpi/foundation-shared-domain/enums";

import type { ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";
import { ScenarioParameter, type ScenarioParameterDTO } from "../scenarios";

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
    this.tags = params.tags.slice();
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
  parameters: ScenarioParameterDTO[];
}

export interface ScenarioOrganisationFilters {
  modelId?: string | null;
}