import type { CreateTimeRangeDTO } from "../shared/timeRange";
import type { ScenarioDeviceOrganisationInfosDTO } from "./scenarioDeviceOrganisationInfos";
import { ScenarioDeviceOrganisationInfos } from "./scenarioDeviceOrganisationInfos";
import type { CreateScenarioParameterDeviceOrganisationDTO } from "./scenarioParameterDeviceOrganisation";


export class ScenarioDeviceOrganisationDetails extends ScenarioDeviceOrganisationInfos {

  constructor(params: ScenarioDeviceOrganisationDetailsDTO) {
    super(params);
  }
}

export interface ScenarioDeviceOrganisationDetailsDTO extends ScenarioDeviceOrganisationInfosDTO {

}

export interface CreateScenarioDeviceOrganisationDTO {
  scenarioId: string;
  deviceOrganisationId: string;
  overrideTimeRanges: boolean;
  timeRanges: CreateTimeRangeDTO[] | null;
  delay: number | null;
  warnDeviceManager: boolean;
  userOrganisationsIds: string[];
  parameters: CreateScenarioParameterDeviceOrganisationDTO[];
}

export interface UpdateScenarioDeviceOrganisationDTO {
  overrideTimeRanges: boolean;
  timeRanges: CreateTimeRangeDTO[] | null;
  warnDeviceManager: boolean;
  delay: number | null;
  userOrganisationsIds: string[];
  parameters: CreateScenarioParameterDeviceOrganisationDTO[];
}