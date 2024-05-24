import { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/models";
import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

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
  deviceOrganisationImageId: string | null;
  deviceOrganisationCode: string;
  deviceOrganisationLabel: string;
  icon: string;
  code: string;
  label: string;
  criticity: Criticity;
  acknowledged: boolean;
  acknowledgingUserId: string | null;
  acknowledgingUserName: string | null;
  acknowledgingUserImageId: string | null;
  acknowledgingTimestamp: number | null;
  initialState: AlertState;
  triggerSourceTimestamp: number | null;
  triggerEnqueuedTimestamp: number | null;
  triggerProcessedTimestamp: number | null;
  lastState: AlertState;
  currentSourceTimestamp: number | null;
  currentEnqueuedTimestamp: number | null;
  currentProcessedTimestamp: number | null;
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
    this.acknowledgingTimestamp = params.acknowledgingTimestamp ?
      utcToEpoch(params.acknowledgingTimestamp) : null;
    this.initialState = new AlertState(params.initialState);
    this.triggerSourceTimestamp = params.triggerSourceTimestamp ?
      utcToEpoch(params.triggerSourceTimestamp) : null;
    this.triggerEnqueuedTimestamp = params.triggerEnqueuedTimestamp ?
      utcToEpoch(params.triggerEnqueuedTimestamp) : null;
    this.triggerProcessedTimestamp = params.triggerProcessedTimestamp ?
      utcToEpoch(params.triggerProcessedTimestamp) : null;
    this.lastState = new AlertState(params.lastState);
    this.currentSourceTimestamp = params.currentSourceTimestamp ?
      utcToEpoch(params.currentSourceTimestamp) : null;
    this.currentEnqueuedTimestamp = params.currentEnqueuedTimestamp ?
      utcToEpoch(params.currentEnqueuedTimestamp) : null;
    this.currentProcessedTimestamp = params.currentProcessedTimestamp ?
      utcToEpoch(params.currentProcessedTimestamp) : null;
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
  deviceOrganisationImageId: string | null;
  deviceOrganisationCode: string;
  deviceOrganisationLabel: string;
  icon: string;
  code: string;
  label: string;
  criticity: Criticity;
  acknowledged: boolean;
  acknowledgingUserId: string | null;
  acknowledgingUserName: string | null;
  acknowledgingUserImageId: string | null;
  acknowledgingTimestamp: string | null;
  initialState: AlertStateDTO;
  triggerSourceTimestamp: string | null;
  triggerEnqueuedTimestamp: string | null;
  triggerProcessedTimestamp: string | null;
  lastState: AlertStateDTO;
  currentSourceTimestamp: string | null;
  currentEnqueuedTimestamp: string | null;
  currentProcessedTimestamp: string | null;
  status: AlertStatus;
  tags: string[];
  history: AlertStateDTO[];
  groupByValues: AlertDataDefinitionDTO[];
}

export interface AlertFilters {
  scenarioId: string | null;
  deviceOrganisationId: string | null;
  statuses: AlertStatus[] | null;
  acknowledged: boolean | null;
  startDate: string | null;
  endDate: string | null;
  selectedEntities: SelectedEntities | null;
  entitiesIds: string[] | null;
  dateVariables: DateVariable[] | null;
}