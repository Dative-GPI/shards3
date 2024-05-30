import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { ConnectivityAlertDetails, ConnectivityAlertDetailsDTO, ConnectivityAlertFilters, ConnectivityAlertInfos, ConnectivityAlertInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { HubFactory } from "@dative-gpi/foundation-shared-services/tools/hubFactory";

import { CONNECTIVITY_ALERTS_HUB_URL, CONNECTIVITY_ALERTS_URL, CONNECTIVITY_ALERT_URL } from "../../config/urls";
import { HUBS } from "../../config/literals";

const ConnectivityAlertServiceFactory = new ServiceFactory<ConnectivityAlertDetailsDTO, ConnectivityAlertDetails>("connectivityAlert", ConnectivityAlertDetails).create(factory => factory.build(
    factory.addGet(CONNECTIVITY_ALERT_URL),
    factory.addGetMany<ConnectivityAlertInfosDTO, ConnectivityAlertInfos, ConnectivityAlertFilters>(CONNECTIVITY_ALERTS_URL, ConnectivityAlertInfos),
    factory.addRemove(CONNECTIVITY_ALERT_URL),
    factory.addNotify(notify => ({
        notifyCreate: (alert: ConnectivityAlertDetails) => notify.notify("add", alert),
        notifyUpdate: (alert: ConnectivityAlertDetails) => notify.notify("update", alert),
        notifyRemove: (alertId: string) => notify.notify("delete", alertId),
    }))
));

const useConnectivityAlertsHub = HubFactory.create(CONNECTIVITY_ALERTS_HUB_URL,
    (connection, { isWatched, hasWatchers }) => {
        connection.on(HUBS.CREATE_CONNECTIVITY_ALERT, (alertId: string) => hasWatchers()
            ? ConnectivityAlertServiceFactory.get(alertId).then(ConnectivityAlertServiceFactory.notifyCreate)
            : null);
        connection.on(HUBS.UPDATE_CONNECTIVITY_ALERT, (alertId: string) => isWatched(alertId) || hasWatchers()
            ? ConnectivityAlertServiceFactory.get(alertId).then(ConnectivityAlertServiceFactory.notifyCreate)
            : null);
        connection.on(HUBS.REMOVE_CONNECTIVITY_ALERT, (alertId: string) => hasWatchers()
            ? ConnectivityAlertServiceFactory.notifyRemove(alertId)
            : null);
    },
    async (connection) => {
        await connection.invoke(HUBS.SUBSCRIBE);
    }
);

const useWatchConnectivityAlerts = HubFactory.createWatcher(useConnectivityAlertsHub);

export const useConnectivityAlert = ComposableFactory.get(ConnectivityAlertServiceFactory, () => {
    const { watchOne } = useWatchConnectivityAlerts();
    return (alert) => {
        watchOne(alert.value.id)
    }
});

export const useConnectivityAlerts = ComposableFactory.getMany(ConnectivityAlertServiceFactory, () => {
    const { watchMany } = useWatchConnectivityAlerts();
    return (_alerts) => {
        watchMany();
    }
});

export const useRemoveConnectivityAlert = ComposableFactory.remove(ConnectivityAlertServiceFactory);