import { NotificationDetails, type NotificationDetailsDTO, NotificationInfos, type NotificationInfosDTO, type NotificationFilters } from "@dative-gpi/foundation-core-domain/models";
import { HubFactory } from "@dative-gpi/foundation-shared-services/tools/hubFactory";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { NOTIFICATIONS_HUB_URL, NOTIFICATIONS_URL, NOTIFICATION_URL } from "../../config";
import { HUBS } from "../../config/literals";

const NotificationServiceFactory = new ServiceFactory<NotificationDetailsDTO, NotificationDetails>("notifications", NotificationDetails).create(factory => factory.build( 
  factory.addGet(NOTIFICATION_URL),
  factory.addGetMany<NotificationInfosDTO, NotificationInfos, NotificationFilters>(NOTIFICATIONS_URL, NotificationInfos),
  factory.addNotify(notifyService => ({
    notifyCreate: (notification: NotificationDetails) => notifyService.notify("add", notification),
    ...ServiceFactory.addCustom("acknowledge", (axios, notificationId: string) => axios.patch(NOTIFICATION_URL(notificationId)), (dto: NotificationDetailsDTO) => {
      const result = new NotificationDetails(dto);
      notifyService.notify("update", result);
      return result;
    })
  }))
));

const useNotificationsHub = HubFactory.create(NOTIFICATIONS_HUB_URL,
    (connection, { hasWatchers }) => {
        connection.on(HUBS.CREATE_NOTIFICATION, (notificationId: string) => hasWatchers()
            ? NotificationServiceFactory.get(notificationId).then(NotificationServiceFactory.notifyCreate)
            : null);
    },
    async (connection) => {
        await connection.invoke(HUBS.SUBSCRIBE);
    }
);

const useWatchNotifications = HubFactory.createWatcher(useNotificationsHub);

export const useNotification = ComposableFactory.get(NotificationServiceFactory, () => {
  const { watchOne } = useWatchNotifications();
  return (notification) => {
    watchOne(notification.value.id);
  }
});

export const useNotifications = ComposableFactory.getMany(NotificationServiceFactory, () => {
  const { watchMany } = useWatchNotifications();
  return () => {
    watchMany();
  }
});

export const useAcknowledgeNotification = ComposableFactory.custom(NotificationServiceFactory.acknowledge);