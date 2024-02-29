import { onUnmounted, ref } from "vue";

import { AlertDetails, AlertDetailsDTO, AlertFilters, AlertInfos, AlertInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, onEntityChanged , ServiceFactory } from "@dative-gpi/bones-ui";

import { ALERTS_URL, ALERT_URL } from "../../config/urls";

const AlertServiceFactory = new ServiceFactory<AlertDetailsDTO, AlertDetails>("alert", AlertDetails).create(factory => factory.build(
    factory.addGet(ALERT_URL),
    factory.addGetMany<AlertInfosDTO, AlertInfos, AlertFilters>(ALERTS_URL, AlertInfos),
    factory.addRemove(ALERT_URL),
    factory.addNotify((notifyService) => ({
        acknowledge: async (alertId: string): Promise<AlertDetails> => {
            const response = await ServiceFactory.http.patch(ALERT_URL(alertId));
            const result = new AlertDetails(response.data);

            notifyService.notify("update", result);

            return result;
        },
        getNotify: async (alertId: string): Promise<AlertDetails> => {
            const response = await ServiceFactory.http.get(ALERT_URL(alertId));
            const result = new AlertDetails(response.data);

            notifyService.notify("update", result);

            return result;
        },
        removeNotify: (alertId: string): void => {
            notifyService.notify("delete", alertId);
        }
    }))
));

export const useAlert = ComposableFactory.get(AlertServiceFactory);
export const useAlerts = ComposableFactory.getMany(AlertServiceFactory);
export const useRemoveAlert = ComposableFactory.remove(AlertServiceFactory);
export const useAcknowledgeAlert = () => {
    const service = AlertServiceFactory();
    const subscribersIds : number[] = [];

    const changing = ref(false);
    const changed = ref<AlertDetails | null>(null);

    onUnmounted(() => {
        subscribersIds.forEach(id => service.unsubscribe(id));
        subscribersIds.length = 0;
    });

    const change = async (alertId: string) => {
        changing.value = true;
        try {
            changed.value = await service.acknowledge(alertId);
        }
        finally {
            changing.value = false;
        }
        subscribersIds.push(service.subscribe("all", onEntityChanged(changed)));
        return changed;
    }

    return {
        changing,
        change,
        changed
    };
}
export const useNotifyAlert = () => {
    const service = AlertServiceFactory();

    const fetching = ref(false);
    const fetched = ref<AlertDetails | null>(null);

    const fetch = async (alertId: string) => {
        fetching.value = true;
        try {
            fetched.value = await service.getNotify(alertId);
        }
        finally {
            fetching.value = false;
        }
        return fetched;
    }

    return {
        fetching,
        fetch,
        fetched
    };
}
export const useNotifyRemoveAlert = () => {
    const service = AlertServiceFactory();

    return {
        remove: service.removeNotify
    };
}