import { Criticity } from "@dative-gpi/foundation-shared-domain/models";

import { ScenarioOrganisationTypeTranslation, ScenarioOrganisationTypeTranslationDTO } from "./scenarioOrganisationTypeTranslation";
import { ApplicationScope } from "../enums/applicationEnums";

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
  labelDefault: string;
  icon: string;
  code: string;
  tags: string[];
  translations: ScenarioOrganisationTypeTranslation[];

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
    this.labelDefault = params.labelDefault;
    this.icon = params.icon;
    this.code = params.code;
    this.tags = params.tags.slice();
    this.translations = params.translations.map(dto => new ScenarioOrganisationTypeTranslation(dto));
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
  labelDefault: string;
  icon: string;
  code: string;
  tags: string[];
  translations: ScenarioOrganisationTypeTranslationDTO[];
}

export interface ScenarioOrganisationTypeFilters {
  modelId?: string | null;
}