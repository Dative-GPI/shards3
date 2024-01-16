import { ScenarioDeviceOrganisationInfos, ScenarioDeviceOrganisationInfosDTO } from "./scenarioDeviceOrganisationInfos";
import { CreateTimeRangeDTO, TimeRangeDTO } from "../shared/timeRange";
import { SelectedEntities } from "../enums/sharedEnums";

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
    overrideConditions: boolean;
    triggerCondition?: string;
    autoResolveCondition?: string;
    overrideTimeRanges: boolean;
    timeRanges?: CreateTimeRangeDTO[];
    overrideEntities: boolean;
    selectedEntities: SelectedEntities;
    entitiesIds: string[];
}

export interface UpdateScenarioDeviceOrganisationDTO {
    overrideConditions: boolean;
    triggerCondition?: string;
    autoResolveCondition?: string;
    overrideTimeRanges: boolean;
    timeRanges?: CreateTimeRangeDTO[];
    overrideEntities: boolean;
    selectedEntities: SelectedEntities;
    entitiesIds: string[];
}