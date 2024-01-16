import { ApplicationScope } from "../enums/applicationEnums";
import { Criticity } from "../enums/alertEnums";

export class ScenarioOrganisationTypeInfos {
    id: string;
    scenarioId: string;
    organisationTypeId?: string;
    organisationTypeLabel?: string;
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
        this.icon = params.icon;
        this.code = params.code;
        this.tags = params.tags.slice();
    }
}

export interface ScenarioOrganisationTypeInfosDTO {
    id: string;
    scenarioId: string;
    organisationTypeId?: string;
    organisationTypeLabel?: string;
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

export interface ScenarioOrganisationTypeFilters {
    modelId?: string;
}