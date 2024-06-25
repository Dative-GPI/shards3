import { CreateTimeRangeDTO } from "../shared/timeRange";
import { ScenarioDeviceOrganisationInfos, ScenarioDeviceOrganisationInfosDTO } from "./scenarioDeviceOrganisationInfos";


export class ScenarioDeviceOrganisationDetails extends ScenarioDeviceOrganisationInfos {

  constructor(params: ScenarioDeviceOrganisationDetailsDTO)  {
     super(params);
  }
}

export interface ScenarioDeviceOrganisationDetailsDTO extends ScenarioDeviceOrganisationInfosDTO {

}

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