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
  overrideConditions: boolean;
  triggerCondition: string | null;
  autoResolveCondition: string | null;
  overrideTimeRanges: boolean;
  timeRanges: TimeRange[] | null;

  constructor(params: ScenarioDeviceOrganisationInfosDTO) {
    this.id = params.id;
    this.scenarioId = params.scenarioId;
    this.scenarioLabel = params.scenarioLabel;
    this.deviceOrganisationId = params.deviceOrganisationId;
    this.deviceOrganisationImageId = params.deviceOrganisationImageId;
    this.deviceOrganisationCode = params.deviceOrganisationCode;
    this.deviceOrganisationLabel = params.deviceOrganisationLabel;
    this.overrideConditions = params.overrideConditions;
    this.triggerCondition = params.triggerCondition;
    this.autoResolveCondition = params.autoResolveCondition;
    this.overrideTimeRanges = params.overrideTimeRanges;
    this.timeRanges = params.timeRanges ? 
      params.timeRanges.map(dto => new TimeRange(dto)) : null;
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
  overrideConditions: boolean;
  triggerCondition: string | null;
  autoResolveCondition: string | null;
  overrideTimeRanges: boolean;
  timeRanges: TimeRangeDTO[] | null;
}

export interface ScenarioDeviceOrganisationFilters {
  scenarioId?: string | null;
  deviceOrganisationId?: string | null;
}