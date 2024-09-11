import { type Criticity, type MessageType, type Scope } from "@dative-gpi/foundation-shared-domain/enums";
import { isoToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

import { type NotificationAudience } from "./notificationAudience";

export class NotificationInfos {
  id: string;
  title: string;
  body: string;
  pageUrl: string;
  entityId?: string;
  scope: Scope;
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
    this.entityId = params.entityId;
    this.scope = params.scope as Scope;
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
  entityId?: string;
  scope: number;
  type: number;
  criticity: number;
  timestamp: string;
  acknowledged: boolean | null;
  acknowledgingTimestamp: string | null;
}

export interface NotificationFilters {
  audiences: NotificationAudience[];
  type?: MessageType | null;
  criticity?: Criticity | null;
}