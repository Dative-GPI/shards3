import { type NotificationDetailsDTO, type NotificationFilters, type NotificationInfosDTO } from "@dative-gpi/foundation-shared-domain/models";
import { NotificationDetails, NotificationInfos } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { NOTIFICATION_URL, NOTIFICATIONS_URL } from "../../config/urls";

const NotificationServiceFactory = new ServiceFactory<NotificationDetailsDTO, NotificationDetails>("notification", NotificationDetails).create(factory => factory.build(
  factory.addGet(NOTIFICATION_URL),
  factory.addGetMany<NotificationInfosDTO, NotificationInfos, NotificationFilters>(NOTIFICATIONS_URL, NotificationInfos),
  factory.addNotify(notifyService => ({
    ...ServiceFactory.addCustom("acknowledge", (axios, notificationId: string) => axios.patch(NOTIFICATION_URL(notificationId)), (dto: NotificationDetailsDTO) => {
      const result = new NotificationDetails(dto);
      notifyService.notify("update", result);
      return result;
    })
  }))
));

export const useNotifications = ComposableFactory.getMany(NotificationServiceFactory);
export const useAcknowledgeNotification = ComposableFactory.custom(NotificationServiceFactory.acknowledge);