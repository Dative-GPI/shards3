import { ConnectivityAlertDetails, ConnectivityAlertDetailsDTO, ConnectivityAlertFilters, ConnectivityAlertInfos, ConnectivityAlertInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { CONNECTIVITY_ALERTS_URL, CONNECTIVITY_ALERT_URL } from "../../config/urls";

const ConnectivityAlertServiceFactory = new ServiceFactory<ConnectivityAlertDetailsDTO, ConnectivityAlertDetails>("connectivityAlert", ConnectivityAlertDetails).create(factory => factory.build(
    factory.addGet(CONNECTIVITY_ALERT_URL),
    factory.addGetMany<ConnectivityAlertInfosDTO, ConnectivityAlertInfos, ConnectivityAlertFilters>(CONNECTIVITY_ALERTS_URL, ConnectivityAlertInfos),
    factory.addRemove(CONNECTIVITY_ALERT_URL),
    factory.addNotify()
));

export const useConnectivityAlert = ComposableFactory.get(ConnectivityAlertServiceFactory);
export const useConnectivityAlerts = ComposableFactory.getMany(ConnectivityAlertServiceFactory);
export const useRemoveConnectivityAlert = ComposableFactory.remove(ConnectivityAlertServiceFactory);