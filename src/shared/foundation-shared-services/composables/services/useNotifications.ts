import { type NotificationDetailsDTO, type NotificationFilters, type NotificationInfosDTO } from "@dative-gpi/foundation-shared-domain/models";
import { NotificationDetails, NotificationInfos } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { HUBS, NOTIFICATION_URL, NOTIFICATIONS_HUB_URL, NOTIFICATIONS_URL } from "../../config";
import { HubFactory } from "../../tools";

const NotificationServiceFactory = new ServiceFactory<NotificationDetailsDTO, NotificationDetails>("notification", NotificationDetails).create(factory => factory.build(
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


export const useNotifications = ComposableFactory.getMany(NotificationServiceFactory, () => {
  const { watchMany } = useWatchNotifications();
  return () => {
    watchMany();
  }
});
export const useAcknowledgeNotification = ComposableFactory.custom(NotificationServiceFactory.acknowledge);