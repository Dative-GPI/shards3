import type { ResolveOn, TriggerOn } from "@dative-gpi/foundation-shared-domain/models";

import type { ScenarioOrganisationTypeInfosDTO } from "./scenarioOrganisationTypeInfos";
import { ScenarioOrganisationTypeInfos } from "./scenarioOrganisationTypeInfos";
import type { CreateTimeRangeDTO, TimeRangeDTO } from "../shared/timeRange";
import { TimeRange } from "../shared/timeRange";
import type { ScenarioTranslationDTO } from "../scenarios";
import { ScenarioTranslation } from "../scenarios";

export class ScenarioOrganisationTypeDetails extends ScenarioOrganisationTypeInfos {
  groupByIds: string[];
  metadataIds: string[];
  labelDefault: string;
  description: string;
  descriptionDefault: string;
  alertLabel: string;
  alertLabelDefault: string;
  alertDescription: string;
  alertDescriptionDefault: string;
  alertCode: string;
  alertIcon: string;
  alertTags: string[];
  timeRanges: TimeRange[];
  triggerOn: TriggerOn;
  triggerCondition: string;
  triggerMin: number | null;
  autoResolveOn: ResolveOn;
  autoResolveCondition: string;
  autoResolveMin: number | null;
  timeout: number | null;
  lock: number | null;
  waitResolved: boolean;
  translations: ScenarioTranslation[];

  constructor(params: ScenarioOrganisationTypeDetailsDTO) {
    super(params);

    this.groupByIds = params.groupByIds.slice();
    this.metadataIds = params.metadataIds.slice();
    this.labelDefault = params.labelDefault;
    this.description = params.description;
    this.descriptionDefault = params.descriptionDefault;
    this.alertLabel = params.alertLabel;
    this.alertLabelDefault = params.alertLabelDefault;
    this.alertDescription = params.alertDescription;
    this.alertDescriptionDefault = params.alertDescriptionDefault;
    this.alertIcon = params.alertIcon;
    this.alertCode = params.alertCode;
    this.alertTags = params.alertTags.slice();
    this.timeRanges = params.timeRanges.map(dto => new TimeRange(dto));
    this.triggerOn = params.triggerOn as TriggerOn;
    this.triggerCondition = params.triggerCondition;
    this.triggerMin = params.triggerMin;
    this.autoResolveOn = params.autoResolveOn as ResolveOn;
    this.autoResolveCondition = params.autoResolveCondition;
    this.autoResolveCondition = params.autoResolveCondition;
    this.autoResolveMin = params.autoResolveMin;
    this.timeout = params.timeout;
    this.lock = params.lock;
    this.waitResolved = params.waitResolved;
    this.translations = params.translations.map(t => new ScenarioTranslation(t));
  }
}

export interface ScenarioOrganisationTypeDetailsDTO extends ScenarioOrganisationTypeInfosDTO {
  groupByIds: string[];
  metadataIds: string[];
  labelDefault: string;
  description: string;
  descriptionDefault: string;
  alertLabel: string;
  alertLabelDefault: string;
  alertDescription: string;
  alertDescriptionDefault: string;
  alertIcon: string;
  alertCode: string;
  alertTags: string[];
  timeRanges: TimeRangeDTO[];
  triggerOn: number;
  triggerCondition: string;
  triggerMin: number | null;
  autoResolveOn: number;
  autoResolveCondition: string;
  autoResolveMin: number | null;
  timeout: number | null;
  lock: number | null;
  waitResolved: boolean;
  translations: ScenarioTranslationDTO[];
}

export interface CreateScenarioOrganisationTypeDTO {
  scenarioOrganisationId: string;
  organisationTypeId: string | null;
}

export interface UpdateScenarioOrganisationTypeDTO {
  modelId: string;
  dataCategoryId: string;
  dataDefinitionId: string | null;
  groupByIds: string[];
  metadataIds: string[];
  criticity: number;
  labelDefault: string;
  descriptionDefault: string;
  code: string;
  icon: string;
  tags: string[];
  alertLabelDefault: string;
  alertDescriptionDefault: string;
  alertCode: string;
  alertIcon: string;
  alertTags: string[];
  timeRanges: CreateTimeRangeDTO[];
  triggerOn: number;
  triggerCondition: string;
  triggerMin: number | null;
  autoResolveOn: number;
  autoResolveCondition: string;
  autoResolveMin: number | null;
  timeout: number | null;
  lock: number | null;
  waitResolved: boolean;
  translations: ScenarioTranslationDTO[];
}