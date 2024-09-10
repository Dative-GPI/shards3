
export class ScenarioParameterOverride {
  scenarioParameterId: string;
  overrideValue: string | null;

  constructor(params: ScenarioParameterOverrideDTO) {
    this.scenarioParameterId = params.scenarioParameterId;
    this.overrideValue = params.overrideValue;

  }
}

export interface ScenarioParameterOverrideDTO {
  scenarioParameterId: string;
  overrideValue: string | null;
}
export interface CreateScenarioParameterOverrideDTO {
  scenarioParameterId: string;
  overrideValue: string | null;
}