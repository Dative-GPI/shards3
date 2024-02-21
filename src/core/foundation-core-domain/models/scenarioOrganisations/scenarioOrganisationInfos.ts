import { Criticity } from "@dative-gpi/foundation-shared-domain/models";

import { ApplicationScope } from "../enums/applicationEnums";

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
    icon: string;
    code: string;
    tags: string[];

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
        this.icon = params.icon;
        this.code = params.code;
        this.tags = params.tags.slice();
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
    icon: string;
    code: string;
    tags: string[];
}

export interface ScenarioOrganisationFilters {
     modelId?: string;
}