import { AlertDetails, type AlertDetailsDTO, type AlertFilters, AlertInfos, type AlertInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { HubFactory } from "@dative-gpi/foundation-shared-services/tools/hubFactory";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { HUBS } from "@dative-gpi/foundation-shared-services/config";

import { ALERTS_HUB_URL, ALERTS_URL, ALERT_URL } from "../../config/urls";

const AlertServiceFactory = new ServiceFactory<AlertDetailsDTO, AlertDetails>("alert", AlertDetails).create(factory => factory.build(
  factory.addGet(ALERT_URL),
  factory.addGetMany<AlertInfosDTO, AlertInfos, AlertFilters>(ALERTS_URL, AlertInfos),
  factory.addRemove(ALERT_URL),
  factory.addNotify(notifyService => ({
    notifyCreate: (alert: AlertDetails) => notifyService.notify("add", alert),
    notifyUpdate: (alert: AlertDetails) => notifyService.notify("update", alert),
    notifyRemove: (alertId: string) => notifyService.notify("delete", alertId),
    ...ServiceFactory.addCustom("acknowledge", (axios, alertId: string) => axios.patch(ALERT_URL(alertId)), (dto: AlertDetailsDTO) => {
      const result = new AlertDetails(dto);
      notifyService.notify("update", result);
      notifyService.notify("reset");
      return result;
    })
  }))
));

const useAlertsHub = HubFactory.create(ALERTS_HUB_URL,
  (connection, { isWatched, hasWatchers }) => {
    connection.on(HUBS.CREATE_ALERT, (alertId: string) => hasWatchers()
      ? AlertServiceFactory.get(alertId).then(AlertServiceFactory.notifyCreate)
      : null);
    connection.on(HUBS.UPDATE_ALERT, (alertId: string) => isWatched(alertId) || hasWatchers()
      ? AlertServiceFactory.get(alertId).then(AlertServiceFactory.notifyUpdate)
      : null);
    connection.on(HUBS.REMOVE_ALERT, (alertId: string) => hasWatchers()
      ? AlertServiceFactory.notifyRemove(alertId)
      : null);
  },
  async (connection) => {
    await connection.invoke(HUBS.SUBSCRIBE);
  }
);

const useWatchAlerts = HubFactory.createWatcher(useAlertsHub);

export const useAlert = ComposableFactory.get(AlertServiceFactory, () => {
  const { watchOne } = useWatchAlerts();
  return (alert) => {
    watchOne(alert.value.id);
  }
});

export const useAlerts = ComposableFactory.getMany(AlertServiceFactory, () => {
  const { watchMany } = useWatchAlerts();
  return () => {
    watchMany();
  }
});

export const useRemoveAlert = ComposableFactory.remove(AlertServiceFactory);
export const useAcknowledgeAlert = ComposableFactory.custom(AlertServiceFactory.acknowledge);