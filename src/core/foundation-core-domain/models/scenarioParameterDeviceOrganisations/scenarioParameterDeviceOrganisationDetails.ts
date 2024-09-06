import type { ScenarioParameterDeviceOrganisationInfosDTO } from "./scenarioParameterDeviceOrganisationInfos";
import { ScenarioParameterDeviceOrganisationInfos } from "./scenarioParameterDeviceOrganisationInfos";


export class ScenarioParameterDeviceOrganisationDetails extends ScenarioParameterDeviceOrganisationInfos {

  constructor(params: ScenarioParameterDeviceOrganisationDetailsDTO) {
    super(params);
  }
}

export interface ScenarioParameterDeviceOrganisationDetailsDTO extends ScenarioParameterDeviceOrganisationInfosDTO {

}

export interface CreateScenarioParameterDeviceOrganisationDTO {
  scenarioParameterId: string;
  deviceOrganisationId: string;
  overrideValue: string;
}

export interface UpdateScenarioParameterDeviceOrganisationDTO {
  overrideValue: string | null;
}