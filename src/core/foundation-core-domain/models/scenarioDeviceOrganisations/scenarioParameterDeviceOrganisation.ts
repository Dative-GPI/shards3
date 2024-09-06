
export class ScenarioParameterDeviceOrganisation {
  scenarioParameterId: string;
  overrideValue: string | null;

  constructor(params: ScenarioParameterDeviceOrganisationDTO) {
    this.scenarioParameterId = params.scenarioParameterId;
    this.overrideValue = params.overrideValue;

  }
}

export interface ScenarioParameterDeviceOrganisationDTO {
  scenarioParameterId: string;
  overrideValue: string | null;
}
export interface CreateScenarioParameterDeviceOrganisationDTO {
  scenarioParameterId: string;
  overrideValue: string;
}