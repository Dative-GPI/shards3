import { Ref, readonly, ref } from "vue";

import { ConnectivityAlertDetails, ConnectivityAlertDetailsDTO, ConnectivityAlertFilters, ConnectivityAlertInfos, ConnectivityAlertInfosDTO } from "@dative-gpi/foundation-shared-ui-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { CONNECTIVITY_ALERTS_URL, CONNECTIVITY_ALERT_URL } from "../../config/urls";

const ConnectivityAlertServiceFactory = new ServiceFactory<ConnectivityAlertDetailsDTO, ConnectivityAlertDetails>("connectivityAlert", ConnectivityAlertDetails).create(factory => factory.build(
    factory.addGet(CONNECTIVITY_ALERT_URL),
    factory.addGetMany<ConnectivityAlertInfosDTO, ConnectivityAlertInfos, ConnectivityAlertFilters>(CONNECTIVITY_ALERTS_URL, ConnectivityAlertInfos),
    factory.addRemove(CONNECTIVITY_ALERT_URL),
    factory.addNotify((notifyService) => ({
        getNotify: async (connectivityAlertId: string): Promise<ConnectivityAlertDetails> => {
            const response = await ServiceFactory.http.get(CONNECTIVITY_ALERT_URL(connectivityAlertId));
            const result = new ConnectivityAlertDetails(response.data);

            notifyService.notify("update", result);

            return result;
        },
        removeNotify: (connectivityAlertId: string): void => {
            notifyService.notify("delete", connectivityAlertId);
        }
    }))
));

export const useConnectivityAlert = ComposableFactory.get(ConnectivityAlertServiceFactory);
export const useConnectivityAlerts = ComposableFactory.getMany(ConnectivityAlertServiceFactory);
export const useRemoveConnectivityAlert = ComposableFactory.remove(ConnectivityAlertServiceFactory);
export const useNotifyConnectivityAlert = () => {
    const service = ConnectivityAlertServiceFactory();

    const fetching = ref(false);
    const fetched = ref<ConnectivityAlertDetails | null>(null) as Ref<ConnectivityAlertDetails | null>;

    const fetch = async (connectivityAlertId: string) => {
        fetching.value = true;
        try {
            fetched.value = await service.getNotify(connectivityAlertId);
        }
        finally {
            fetching.value = false;
        }

        return readonly(fetched as Ref<ConnectivityAlertDetails>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        notified: readonly(fetched)
    };
}
export const useNotifyRemoveConnectivityAlert = () => {
    const service = ConnectivityAlertServiceFactory();

    return {
        remove: service.removeNotify
    };
}