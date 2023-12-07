import { Ref, onUnmounted, readonly, ref } from "vue";

import { AlertDetails, AlertDetailsDTO, AlertFilters, AlertInfos, AlertInfosDTO } from "@dative-gpi/foundation-core-domain";
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

    const changing = ref(false);
    const changed = ref<AlertDetails | null>(null) as Ref<AlertDetails | null>;

    const change = async (alertId: string) => {
        changing.value = true;
        try {
            changed.value = await service.acknowledge(alertId);
        }
        finally {
            changing.value = false;
        }

        const subscriberId = service.subscribe("all", onEntityChanged(changed))
        onUnmounted(() => service.unsubscribe(subscriberId));

        return readonly(changed as Ref<AlertDetails>);
    }

    return {
        changing: readonly(changing),
        change,
        changed: readonly(changed)
    };
}
export const useNotifyAlert = () => {
    const service = AlertServiceFactory();

    const fetching = ref(false);
    const fetched = ref<AlertDetails | null>(null) as Ref<AlertDetails | null>;

    const fetch = async (alertId: string) => {
        fetching.value = true;
        try {
            fetched.value = await service.getNotify(alertId);
        }
        finally {
            fetching.value = false;
        }

        return readonly(fetched as Ref<AlertDetails>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    };
}
export const useNotifyRemoveAlert = () => {
    const service = AlertServiceFactory();

    return {
        remove: service.removeNotify
    };
}