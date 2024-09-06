
export class ScenarioParameterDeviceOrganisationInfos {
  id: string;
  scenarioParameterId: string;
  scenarioParameterLabel: string;
  deviceOrganisationId: string;
  deviceOrganisationImageId: string | null;
  deviceOrganisationLabel: string;
  parameterType: number;
  overrideValue: string | null;
  parameterValueDefault: string;
  parameterDataDefinitionId: string | null;

  constructor(params: ScenarioParameterDeviceOrganisationInfosDTO) {
    this.id = params.id;
    this.scenarioParameterId = params.scenarioParameterId;
    this.deviceOrganisationId = params.deviceOrganisationId;
    this.scenarioParameterLabel = params.scenarioParameterLabel;
    this.deviceOrganisationImageId = params.deviceOrganisationImageId;
    this.deviceOrganisationLabel = params.deviceOrganisationLabel;
    this.parameterType = params.parameterType;
    this.parameterDataDefinitionId = params.parameterDataDefinitionId;
    this.overrideValue = params.overrideValue;
    this.parameterValueDefault = params.parameterValueDefault;

  }
}

export interface ScenarioParameterDeviceOrganisationInfosDTO {
  id: string;
  scenarioParameterId: string;
  scenarioParameterLabel: string;
  deviceOrganisationId: string;
  deviceOrganisationImageId: string | null;
  deviceOrganisationLabel: string;
  parameterType: number;
  overrideValue: string | null;
  parameterValueDefault: string;
  parameterDataDefinitionId: string | null;
}

export interface ScenarioParameterDeviceOrganisationFilters {
  scenarioParameterId?: string | null;
  deviceOrganisationId?: string | null;
}