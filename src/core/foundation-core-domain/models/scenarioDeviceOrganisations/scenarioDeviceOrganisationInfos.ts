import type { ScenarioParameterOverrideDTO } from "../scenarios/scenarioParameterOverride";
import { ScenarioParameterOverride } from "../scenarios/scenarioParameterOverride";
import { ScenarioParameter } from "../scenarios/scenarioParameter";
import type { ScenarioParameterDTO } from "../scenarios/scenarioParameter";
import type { TimeRangeDTO } from "../shared/timeRange";
import { TimeRange } from "../shared/timeRange";

export class ScenarioDeviceOrganisationInfos {
  id: string;
  scenarioId: string;
  scenarioLabel: string;
  deviceOrganisationId: string;
  deviceOrganisationImageId: string | null;
  deviceOrganisationCode: string;
  deviceOrganisationLabel: string;
  overrideTimeRanges: boolean;
  timeRanges: TimeRange[] | null;
  delay: number | null;
  scenarioIcon: string;
  warnDeviceManager: boolean;
  userOrganisationsIds: string[];
  modelId: string;
  overrideParameters: ScenarioParameterOverride[];
  defaultParameters: ScenarioParameter[];

  constructor(params: ScenarioDeviceOrganisationInfosDTO) {
    this.id = params.id;
    this.scenarioId = params.scenarioId;
    this.scenarioLabel = params.scenarioLabel;
    this.deviceOrganisationId = params.deviceOrganisationId;
    this.deviceOrganisationImageId = params.deviceOrganisationImageId;
    this.deviceOrganisationCode = params.deviceOrganisationCode;
    this.deviceOrganisationLabel = params.deviceOrganisationLabel;
    this.overrideTimeRanges = params.overrideTimeRanges;
    this.timeRanges = params.timeRanges ?
      params.timeRanges.map(dto => new TimeRange(dto)) : null;
    this.warnDeviceManager = params.warnDeviceManager;
    this.delay = params.delay;
    this.scenarioIcon = params.scenarioIcon;
    this.userOrganisationsIds = params.userOrganisationsIds;
    this.modelId = params.modelId;
    this.overrideParameters = params.overrideParameters.map(dto => new ScenarioParameterOverride(dto));
    this.defaultParameters = params.defaultParameters.map(dto => new ScenarioParameter(dto));
  }
}

export interface ScenarioDeviceOrganisationInfosDTO {
  id: string;
  scenarioId: string;
  scenarioLabel: string;
  deviceOrganisationId: string;
  deviceOrganisationImageId: string | null;
  deviceOrganisationCode: string;
  deviceOrganisationLabel: string;
  overrideTimeRanges: boolean;
  timeRanges: TimeRangeDTO[] | null;
  delay: number | null;
  scenarioIcon: string;
  modelId: string;
  warnDeviceManager: boolean;
  userOrganisationsIds: string[];
  overrideParameters: ScenarioParameterOverrideDTO[];
  defaultParameters: ScenarioParameterDTO[];
}

export interface ScenarioDeviceOrganisationFilters {
  scenarioId?: string | null;
  deviceOrganisationId?: string | null;
  deviceOrganisationsIds?: string[] | null;
}