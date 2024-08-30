import { ConnectivityAlertDetails, type ConnectivityAlertDetailsDTO, type ConnectivityAlertFilters, ConnectivityAlertInfos, type ConnectivityAlertInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { HubFactory } from "@dative-gpi/foundation-shared-services/tools/hubFactory";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { CONNECTIVITY_ALERTS_HUB_URL, CONNECTIVITY_ALERTS_URL, CONNECTIVITY_ALERT_URL } from "../../config/urls";
import { HUBS } from "../../config/literals";

const ConnectivityAlertServiceFactory = new ServiceFactory<ConnectivityAlertDetailsDTO, ConnectivityAlertDetails>("connectivityAlert", ConnectivityAlertDetails).create(factory => factory.build(
  factory.addGet(CONNECTIVITY_ALERT_URL),
  factory.addGetMany<ConnectivityAlertInfosDTO, ConnectivityAlertInfos, ConnectivityAlertFilters>(CONNECTIVITY_ALERTS_URL, ConnectivityAlertInfos),
  factory.addRemove(CONNECTIVITY_ALERT_URL),
  factory.addNotify(notify => ({
    notifyCreate: (connectivityAlert: ConnectivityAlertDetails) => notify.notify("add", connectivityAlert),
    notifyUpdate: (connectivityAlert: ConnectivityAlertDetails) => notify.notify("update", connectivityAlert),
    notifyRemove: (connectivityAlertId: string) => notify.notify("delete", connectivityAlertId),
  }))
));

const useConnectivityAlertsHub = HubFactory.create(CONNECTIVITY_ALERTS_HUB_URL,
  (connection, { isWatched, hasWatchers }) => {
    connection.on(HUBS.CREATE_CONNECTIVITY_ALERT, (connectivityAlertId: string) => hasWatchers()
      ? ConnectivityAlertServiceFactory.get(connectivityAlertId).then(ConnectivityAlertServiceFactory.notifyCreate)
      : null);
    connection.on(HUBS.UPDATE_CONNECTIVITY_ALERT, (connectivityAlertId: string) => isWatched(connectivityAlertId) || hasWatchers()
      ? ConnectivityAlertServiceFactory.get(connectivityAlertId).then(ConnectivityAlertServiceFactory.notifyCreate)
      : null);
    connection.on(HUBS.REMOVE_CONNECTIVITY_ALERT, (connectivityAlertId: string) => hasWatchers()
      ? ConnectivityAlertServiceFactory.notifyRemove(connectivityAlertId)
      : null);
  },
  async (connection) => {
    await connection.invoke(HUBS.SUBSCRIBE);
  }
);

const useWatchConnectivityAlerts = HubFactory.createWatcher(useConnectivityAlertsHub);

export const useConnectivityAlert = ComposableFactory.get(ConnectivityAlertServiceFactory, () => {
  const { watchOne } = useWatchConnectivityAlerts();
  return (connectivityAlert) => {
    watchOne(connectivityAlert.value.id)
  }
});

export const useConnectivityAlerts = ComposableFactory.getMany(ConnectivityAlertServiceFactory, () => {
  const { watchMany } = useWatchConnectivityAlerts();
  return () => {
    watchMany();
  }
});

export const useRemoveConnectivityAlert = ComposableFactory.remove(ConnectivityAlertServiceFactory);