import { ResolveOn, TriggerOn } from "@dative-gpi/foundation-shared-domain/models";

import { ScenarioOrganisationTypeInfos, ScenarioOrganisationTypeInfosDTO } from "./scenarioOrganisationTypeInfos";
import { CreateTimeRangeDTO, TimeRange, TimeRangeDTO } from "../shared/timeRange";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { CreateWidgetDTO } from "../widgets/widgetDetails";
import { SelectedEntities } from "../enums/sharedEnums";
import { AutoRefresh } from "../enums/dashboardEnums";

export class ScenarioOrganisationTypeDetails extends ScenarioOrganisationTypeInfos {
    groupByIds: string[];
    metadataIds: string[];
    description: string;
    alertLabel: string;
    alertDescription: string;
    alertIcon: string;
    alertCode: string;
    alertTags: string[];
    timeRanges: TimeRange[];
    triggerOn: TriggerOn;
    triggerCondition: string;
    triggerMin: number | null;
    autoResolveOn: ResolveOn;
    autoResolveCondition: string;
    autoResolveMin: number | null;
    timeout: number | null;
    lock: number | null;
    waitResolved: boolean;
    singleEntity: boolean;
    dynamicEntities: boolean;
    globalSelectedEntities: SelectedEntities;
    globalEntitiesIds: string[];
    dynamicDates: boolean;
    globalStartDate: string;
    globalEndDate: string;
    useAutoRefresh: boolean;
    autoRefresh: AutoRefresh;
    widgets: WidgetInfos[];

    constructor(params: ScenarioOrganisationTypeDetailsDTO) {
        super(params);

        this.groupByIds = params.groupByIds.slice();
        this.metadataIds = params.metadataIds.slice();
        this.description = params.description;
        this.alertLabel = params.alertLabel;
        this.alertDescription = params.alertDescription;
        this.alertIcon = params.alertIcon;
        this.alertCode = params.alertCode;
        this.alertTags = params.alertTags.slice();
        this.timeRanges = params.timeRanges.map(dto => new TimeRange(dto));
        this.triggerOn = params.triggerOn as TriggerOn;
        this.triggerCondition = params.triggerCondition;
        this.triggerMin = params.triggerMin;
        this.autoResolveOn = params.autoResolveOn as ResolveOn;
        this.autoResolveCondition = params.autoResolveCondition;
        this.autoResolveCondition = params.autoResolveCondition;
        this.autoResolveMin = params.autoResolveMin;
        this.timeout = params.timeout;
        this.lock = params.lock;
        this.waitResolved = params.waitResolved;
        this.singleEntity = params.singleEntity;
        this.dynamicEntities = params.dynamicEntities;
        this.globalSelectedEntities = params.globalSelectedEntities as SelectedEntities;
        this.globalEntitiesIds = params.globalEntitiesIds.slice();
        this.dynamicDates = params.dynamicDates;
        this.globalStartDate = params.globalStartDate;
        this.globalEndDate = params.globalEndDate;
        this.useAutoRefresh = params.useAutoRefresh;
        this.autoRefresh = params.autoRefresh as AutoRefresh;
        this.widgets = params.widgets.map(dto => new WidgetInfos(dto));
    }
}

export interface ScenarioOrganisationTypeDetailsDTO extends ScenarioOrganisationTypeInfosDTO {
    groupByIds: string[];
    metadataIds: string[];
    description: string;
    alertLabel: string;
    alertDescription: string;
    alertIcon: string;
    alertCode: string;
    alertTags: string[];
    timeRanges: TimeRangeDTO[];
    triggerOn: number;
    triggerCondition: string;
    triggerMin: number | null;
    autoResolveOn: number;
    autoResolveCondition: string;
    autoResolveMin: number | null;
    timeout: number | null;
    lock: number | null;
    waitResolved: boolean;
    singleEntity: boolean;
    dynamicEntities: boolean;
    globalSelectedEntities: number;
    globalEntitiesIds: string[];
    dynamicDates: boolean;
    globalStartDate: string;
    globalEndDate: string;
    useAutoRefresh: boolean;
    autoRefresh: number;
    widgets: WidgetInfosDTO[];
}

export interface CreateScenarioOrganisationTypeDTO {
    scenarioOrganisationId: string;
    organisationTypeId: string | null;
}

export interface UpdateScenarioOrganisationTypeDTO {
    modelId: string;
    dataCategoryId: string;
    dataDefinitionId: string | null;
    groupByIds: string[];
    metadataIds: string[];
    criticity: number;
    labelDefault: string;
    descriptionDefault: string;
    icon: string;
    code: string;
    tags: string[];
    alertLabelDefault: string;
    alertDescriptionDefault: string;
    alertIcon: string;
    alertCode: string;
    alertTags: string[];
    timeRanges: CreateTimeRangeDTO[];
    triggerOn: number;
    triggerCondition: string;
    triggerMin: number | null;
    autoResolveOn: number;
    autoResolveCondition: string;
    autoResolveMin: number | null;
    timeout: number | null;
    lock: number | null;
    waitResolved: boolean;
    singleEntity: boolean;
    dynamicEntities: boolean;
    globalSelectedEntities: number;
    globalEntitiesIds: string[];
    dynamicDates: boolean;
    globalStartDate: string;
    globalEndDate: string;
    useAutoRefresh: boolean;
    autoRefresh: number;
    widgets: CreateWidgetDTO[];
}