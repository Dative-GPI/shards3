import { TimeRange, TimeRangeDTO } from "../shared/timeRange";
import { SelectedEntities } from "../enums/sharedEnums";

export class ScenarioDeviceOrganisationInfos {
    id: string;
    scenarioId: string;
    scenarioLabel: string;
    deviceOrganisationId: string;
    deviceOrganisationImageId?: string;
    deviceOrganisationImageBlurHash?: string;
    deviceOrganisationImageHeight?: number;
    deviceOrganisationImageWidth?: number;
    deviceOrganisationCode: string;
    deviceOrganisationLabel: string;
    overrideConditions: boolean;
    triggerCondition?: string;
    autoResolveCondition?: string;
    overrideTimeRanges: boolean;
    timeRanges?: TimeRange[];
    overrideEntities: boolean;
    selectedEntities: SelectedEntities;
    entitiesIds: string[];

    constructor(params: ScenarioDeviceOrganisationInfosDTO) {
        this.id = params.id;
        this.scenarioId = params.scenarioId;
        this.scenarioLabel = params.scenarioLabel;
        this.deviceOrganisationId = params.deviceOrganisationId;
        this.deviceOrganisationImageId = params.deviceOrganisationImageId;
        this.deviceOrganisationImageBlurHash = params.deviceOrganisationImageBlurHash;
        this.deviceOrganisationImageWidth = params.deviceOrganisationImageWidth;
        this.deviceOrganisationImageHeight = params.deviceOrganisationImageHeight;
        this.deviceOrganisationCode = params.deviceOrganisationCode;
        this.deviceOrganisationLabel = params.deviceOrganisationLabel;
        this.overrideConditions = params.overrideConditions;
        this.triggerCondition = params.triggerCondition;
        this.autoResolveCondition = params.autoResolveCondition;
        this.overrideTimeRanges = params.overrideTimeRanges;
        this.timeRanges = params.timeRanges?.map(dto => new TimeRange(dto));
        this.overrideEntities = params.overrideEntities;
        this.selectedEntities = params.selectedEntities as SelectedEntities;
        this.entitiesIds = params.entitiesIds.slice();
    }
}

export interface ScenarioDeviceOrganisationInfosDTO {
    id: string;
    scenarioId: string;
    scenarioLabel: string;
    deviceOrganisationId: string;
    deviceOrganisationImageId?: string;
    deviceOrganisationImageBlurHash?: string;
    deviceOrganisationImageHeight?: number;
    deviceOrganisationImageWidth?: number;
    deviceOrganisationCode: string;
    deviceOrganisationLabel: string;
    overrideConditions: boolean;
    triggerCondition?: string;
    autoResolveCondition?: string;
    overrideTimeRanges: boolean;
    timeRanges?: TimeRangeDTO[];
    overrideEntities: boolean;
    selectedEntities: number;
    entitiesIds: string[];
}

export interface ScenarioDeviceOrganisationFilters {
    scenarioId?: string;
    deviceOrganisationId?: string;
}