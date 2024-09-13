import { type NotificationInfos } from "../models";
import { Criticity, Scope } from "../enums";

export const getFromAudience = (
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

export const getForDrawer = (
  notifications: NotificationInfos[],
  organisationId: string,
  userId: string,
  criticity: Criticity = Criticity.None
): NotificationInfos[] => getFromAudience(notifications, true, criticity, organisationId, userId);

export const getForCard = (
  notifications: NotificationInfos[],
  organisationId: string,
  criticity: Criticity = Criticity.None
): NotificationInfos[] => getFromAudience(notifications, false, criticity, organisationId, null);