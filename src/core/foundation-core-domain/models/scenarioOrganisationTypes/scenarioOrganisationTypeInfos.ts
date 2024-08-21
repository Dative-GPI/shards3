import type { Criticity } from "@dative-gpi/foundation-shared-domain/models";

import type { ApplicationScope } from "../enums/applicationEnums";
import { ScenarioParameter, type ScenarioParameterDTO } from "../scenarios";

export class ScenarioOrganisationTypeInfos {
  id: string;
  scenarioId: string;
  organisationTypeId: string | null;
  organisationTypeLabel: string | null;
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
    this.tags = params.tags.slice();
    this.parameters = params.parameters.map(p => new ScenarioParameter(p));
  }
}

export interface ScenarioOrganisationTypeInfosDTO {
  id: string;
  scenarioId: string;
  organisationTypeId: string | null;
  organisationTypeLabel: string | null;
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

export interface ScenarioOrganisationTypeFilters {
  modelId?: string | null;
}