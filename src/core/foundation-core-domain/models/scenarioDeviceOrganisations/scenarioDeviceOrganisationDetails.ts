import { CreateTimeRangeDTO } from "../shared/timeRange";

export interface CreateScenarioDeviceOrganisationDTO {
  scenarioId: string;
  deviceOrganisationId: string;
  overrideConditions: boolean;
  triggerCondition: string | null;
  autoResolveCondition: string | null;
  overrideTimeRanges: boolean;
  timeRanges: CreateTimeRangeDTO[] | null;
}

export interface UpdateScenarioDeviceOrganisationDTO {
  overrideConditions: boolean;
  triggerCondition: string | null;
  autoResolveCondition: string | null;
  overrideTimeRanges: boolean;
  timeRanges: CreateTimeRangeDTO[] | null;
}