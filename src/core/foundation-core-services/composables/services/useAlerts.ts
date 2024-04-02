import { AlertDetails, AlertDetailsDTO, AlertFilters, AlertInfos, AlertInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { ALERTS_URL, ALERT_URL } from "../../config/urls";

const AlertServiceFactory = new ServiceFactory<AlertDetailsDTO, AlertDetails>("alert", AlertDetails).create(factory => factory.build(
    factory.addGet(ALERT_URL),
    factory.addGetMany<AlertInfosDTO, AlertInfos, AlertFilters>(ALERTS_URL, AlertInfos),
    factory.addRemove(ALERT_URL),
    factory.addNotify(notify => ({
        ...ServiceFactory.addCustom("acknowledge", (axios, alertId: string) => axios.patch(ALERT_URL(alertId)), (dto: AlertDetailsDTO) => {
            const result = new AlertDetails(dto);
            notify.notify("update", result);
            return result;
        })
    }))
));

export const useAlert = ComposableFactory.get(AlertServiceFactory);
export const useAlerts = ComposableFactory.getMany(AlertServiceFactory);
export const useRemoveAlert = ComposableFactory.remove(AlertServiceFactory);
export const useAcknowledgeAlert = ComposableFactory.custom(AlertServiceFactory.acknowledge);