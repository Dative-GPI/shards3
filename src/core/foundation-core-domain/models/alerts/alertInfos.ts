import { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/models";
import { DatesTools } from "@dative-gpi/foundation-shared-domain/tools";

import { AlertDataDefinition, AlertDataDefinitionDTO } from "./alertDataDefinition";
import { AlertState, AlertStateDTO } from "./alertState";
import { SelectedEntities } from "../enums/sharedEnums";
import { DateVariable } from "../shared/dateVariable";

export class AlertInfos {
    id: string;
    scenarioId: string;
    scenarioLabel: string;
    organisationId: string;
    deviceOrganisationId: string;
    deviceOrganisationImageId?: string;
    deviceOrganisationImageBlurHash?: string;
    deviceOrganisationImageHeight?: number;
    deviceOrganisationImageWidth?: number;
    deviceOrganisationCode: string;
    deviceOrganisationLabel: string;
    icon: string;
    code: string;
    label: string;
    criticity: Criticity;
    acknowledged: boolean;
    acknowledgingUserId?: string;
    acknowledgingUserName?: string;
    acknowledgingUserImageId?: string;
    acknowledgingUserImageBlurHash?: string;
    acknowledgingUserImageWidth?: number;
    acknowledgingUserImageHeight?: number;
    acknowledgingTimestamp?: number;
    initialState: AlertState;
    triggerSourceTimestamp?: number;
    triggerEnqueuedTimestamp?: number;
    triggerProcessedTimestamp?: number;
    lastState: AlertState;
    currentSourceTimestamp?: number;
    currentEnqueuedTimestamp?: number;
    currentProcessedTimestamp?: number;
    status: AlertStatus;
    tags: string[];
    history: AlertState[];
    groupByValues: AlertDataDefinition[];

    constructor(params: AlertInfosDTO) {
        this.id = params.id;
        this.scenarioId = params.scenarioId;
        this.scenarioLabel = params.scenarioLabel;
        this.organisationId = params.organisationId;
        this.deviceOrganisationId = params.deviceOrganisationId;
        this.deviceOrganisationImageId = params.deviceOrganisationImageId;
        this.deviceOrganisationImageBlurHash = params.deviceOrganisationImageBlurHash;
        this.deviceOrganisationImageHeight = params.deviceOrganisationImageHeight;
        this.deviceOrganisationImageWidth = params.deviceOrganisationImageWidth;
        this.deviceOrganisationCode = params.deviceOrganisationCode;
        this.deviceOrganisationLabel = params.deviceOrganisationLabel;
        this.icon = params.icon;
        this.code = params.code;
        this.label = params.label;
        this.criticity = params.criticity;
        this.acknowledged = params.acknowledged;
        this.acknowledgingUserId = params.acknowledgingUserId;
        this.acknowledgingUserName = params.acknowledgingUserName;
        this.acknowledgingUserImageId = params.acknowledgingUserImageId;
        this.acknowledgingUserImageBlurHash = params.acknowledgingUserImageBlurHash;
        this.acknowledgingUserImageWidth = params.acknowledgingUserImageWidth;
        this.acknowledgingUserImageHeight = params.acknowledgingUserImageHeight;
        this.acknowledgingTimestamp = params.acknowledgingTimestamp ? DatesTools.utcToEpoch(params.acknowledgingTimestamp) : undefined;
        this.initialState = new AlertState(params.initialState);
        this.triggerSourceTimestamp = params.triggerSourceTimestamp ? DatesTools.utcToEpoch(params.triggerSourceTimestamp) : undefined;
        this.triggerEnqueuedTimestamp = params.triggerEnqueuedTimestamp ? DatesTools.utcToEpoch(params.triggerEnqueuedTimestamp) : undefined;
        this.triggerProcessedTimestamp = params.triggerProcessedTimestamp ? DatesTools.utcToEpoch(params.triggerProcessedTimestamp) : undefined;
        this.lastState = new AlertState(params.lastState);
        this.currentSourceTimestamp = params.currentSourceTimestamp ? DatesTools.utcToEpoch(params.currentSourceTimestamp) : undefined;
        this.currentEnqueuedTimestamp = params.currentEnqueuedTimestamp ? DatesTools.utcToEpoch(params.currentEnqueuedTimestamp) : undefined;
        this.currentProcessedTimestamp = params.currentProcessedTimestamp ? DatesTools.utcToEpoch(params.currentProcessedTimestamp) : undefined;
        this.status = params.status;
        this.tags = params.tags;
        this.history = params.history.map(dto => new AlertState(dto));
        this.groupByValues = params.groupByValues.map(dto => new AlertDataDefinition(dto));
    }
}

export interface AlertInfosDTO {
    id: string;
    scenarioId: string;
    scenarioLabel: string;
    organisationId: string;
    deviceOrganisationId: string;
    deviceOrganisationImageId?: string;
    deviceOrganisationImageBlurHash?: string;
    deviceOrganisationImageHeight?: number;
    deviceOrganisationImageWidth?: number;
    deviceOrganisationCode: string;
    deviceOrganisationLabel: string;
    icon: string;
    code: string;
    label: string;
    criticity: Criticity;
    acknowledged: boolean;
    acknowledgingUserId?: string;
    acknowledgingUserName?: string;
    acknowledgingUserImageId?: string;
    acknowledgingUserImageBlurHash?: string;
    acknowledgingUserImageWidth?: number;
    acknowledgingUserImageHeight?: number;
    acknowledgingTimestamp?: string;
    initialState: AlertStateDTO;
    triggerSourceTimestamp?: string;
    triggerEnqueuedTimestamp?: string;
    triggerProcessedTimestamp?: string;
    lastState: AlertStateDTO;
    currentSourceTimestamp?: string;
    currentEnqueuedTimestamp?: string;
    currentProcessedTimestamp?: string;
    status: AlertStatus;
    tags: string[];
    history: AlertStateDTO[];
    groupByValues: AlertDataDefinitionDTO[];
}

export interface AlertFilters {
    scenarioId?: string;
    deviceOrganisationId?: string;
    statuses?: AlertStatus[];
    acknowledged?: boolean;
    startDate?: string;
    endDate?: string;
    selectedEntities?: SelectedEntities;
    entitiesIds?: string[];
    dateVariables?: DateVariable[];
}