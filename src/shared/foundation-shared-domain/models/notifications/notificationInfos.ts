import { type MessageType } from "../../enums/messages";
import { isoToEpoch } from "../../tools/datesTools";
import { Scope } from "../../enums/applications";
import { Criticity } from "../../enums/alerts";

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

  static getFromAudience = (
    notifications: NotificationInfos[],
    application: boolean,
    criticity: Criticity,
    organisationId?: string | null,
    userId?: string | null,
  ): NotificationInfos[] => notifications.filter((n: NotificationInfos) => {
    if (n.acknowledged) {
      return false;
    }
    if (![Criticity.None, n.criticity].includes(criticity)) {
      return false;
    }
    switch (n.audienceScope) {
      case Scope.Organisation    :
      case Scope.UserOrganisation: return organisationId && n.organisationId && n.organisationId === organisationId;
      case Scope.User            : return userId && n.audienceId === userId;
      case Scope.Application     :
      case Scope.Public          : return application;
  
    }
    return false;
  });

  static getForDrawer = (
    notifications: NotificationInfos[],
    organisationId: string,
    userId: string,
    criticity: Criticity = Criticity.None
  ): NotificationInfos[] => NotificationInfos.getFromAudience(notifications, true, criticity, organisationId, userId);

  static getForCard = (
    notifications: NotificationInfos[],
    organisationId: string,
    criticity: Criticity = Criticity.None
  ): NotificationInfos[] => NotificationInfos.getFromAudience(notifications, false, criticity, organisationId, null);
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