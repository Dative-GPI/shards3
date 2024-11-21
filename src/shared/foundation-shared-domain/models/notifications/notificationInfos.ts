import { type MessageType } from "../../enums/messages";
import { type Scope } from "../../enums/applications";
import { type Criticity } from "../../enums/alerts";
import { isoToEpoch } from "../../tools/datesTools";

export class NotificationInfos {
  id: string;
  title: string;
  body: string;
  pageUrl: string;
  audienceId: string;
  audienceScope: Scope;
  organisationId?: string;
  entityId?: string;
  type: MessageType;
  criticity: Criticity;
  timestamp: number;
  acknowledged: boolean | null;
  acknowledgingTimestamp: number | null;

  constructor(params: NotificationInfosDTO) {
    this.id = params.id;
    this.title = params.title;
    this.body = params.body;
    this.pageUrl = params.pageUrl;
    this.audienceId = params.audienceId;
    this.audienceScope = params.audienceScope as Scope;
    this.organisationId = params.organisationId;
    this.entityId = params.entityId;
    this.type = params.type as MessageType;
    this.criticity = params.criticity as Criticity;
    this.timestamp = isoToEpoch(params.timestamp);
    this.acknowledged = params.acknowledged;
    this.acknowledgingTimestamp = params.acknowledgingTimestamp ?
      isoToEpoch(params.acknowledgingTimestamp) : null;
  }
}

export interface NotificationInfosDTO {
  id: string;
  title: string;
  body: string;
  pageUrl: string;
  audienceId: string;
  audienceScope: number;
  organisationId?: string;
  entityId?: string;
  type: number;
  criticity: number;
  timestamp: string;
  acknowledged: boolean | null;
  acknowledgingTimestamp: string | null;
}

export interface NotificationFilters {
  type?: MessageType | null;
  criticity?: Criticity | null;
}