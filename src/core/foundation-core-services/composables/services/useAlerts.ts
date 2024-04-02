import * as signalR from "@microsoft/signalr";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { AlertDetails, AlertDetailsDTO, AlertFilters, AlertInfos, AlertInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { HUBS } from "../../config/literals";
import { ALERTS_HUB_URL, ALERTS_URL, ALERT_URL } from "../../config/urls";

let connection: signalR.HubConnection | null = null;
let subscribed = false;
let watchManySubscribers = 0;
let watcheds = ref<string[]>([]);

const AlertServiceFactory = new ServiceFactory<AlertDetailsDTO, AlertDetails>("alert", AlertDetails).create(factory => factory.build(
    factory.addGet(ALERT_URL),
    factory.addGetMany<AlertInfosDTO, AlertInfos, AlertFilters>(ALERTS_URL, AlertInfos),
    factory.addRemove(ALERT_URL),
    factory.addCustom("acknowledge", (axios, alertId: string) => axios.patch(ALERT_URL(alertId))),
    factory.addNotify(notify => ({
        fakeCreate: (alert: AlertDetails) => notify.notify("add", alert),
        fakeUpdate: (alert: AlertDetails) => notify.notify("update", alert),
        fakeRemove: (alertId: string) => notify.notify("delete", alertId)
    }))
));

const useAlertsHub = () => {
    const connect = async () => {
        if (!connection) {
            connection = new signalR.HubConnectionBuilder()
                .withUrl(ALERTS_HUB_URL())
                .configureLogging(signalR.LogLevel.Warning)
                .withAutomaticReconnect()
                .build();

            connection.on(HUBS.CREATE_ALERT, onCreate);
            connection.on(HUBS.UPDATE_ALERT, onUpdate);
            connection.on(HUBS.REMOVE_ALERT, onRemove);
        }
        if (connection.state !== signalR.HubConnectionState.Connected) {
            await connection.start();
        }
        if (!subscribed) {
            await connection.invoke(HUBS.SUBSCRIBE);
            subscribed = true;
        }
    }

    const disconnect = async () => {
        if (connection) {
            await connection.stop();
            connection = null;
        }
    }

    const onCreate = async (alertId: string) => {
        if (watchManySubscribers > 0) {
            const alert = await AlertServiceFactory.get(alertId);
            AlertServiceFactory.fakeCreate(alert);
        }
    }

    const onUpdate = async (alertId: string) => {
        if (watchManySubscribers > 0 || watcheds.value.includes(alertId)) {
            const alert = await AlertServiceFactory.get(alertId);
            AlertServiceFactory.fakeUpdate(alert);
        }
    }

    const onRemove = async (alertId: string) => {
        if (watchManySubscribers > 0 || watcheds.value.includes(alertId)) {
            AlertServiceFactory.fakeRemove(alertId);
        }
    }

    const hasSubscribers = computed(() => watcheds.value.length > 0 || watchManySubscribers > 0);

    watch(hasSubscribers, async (value) => {
        if (value) {
            await connect();
        } else {
            await disconnect();
        }
    }, { immediate: true });

    const subscribeToOne = (alertId: string) => {
        watcheds.value.push(alertId);
    }

    const unsubscribeFromOne = (alertId: string) => {
        const index = watcheds.value.indexOf(alertId);
        if (index > -1) watcheds.value = watcheds.value.splice(index, 1);
    }

    const subscribeToMany = () => {
        watchManySubscribers++;
    }

    const unsubscribeFromMany = () => {
        watchManySubscribers--;
    }

    return {
        subscribeToOne,
        unsubscribeFromOne,
        subscribeToMany,
        unsubscribeFromMany
    }
}

const useWatchAlerts = () => {
    const { subscribeToOne, unsubscribeFromOne, subscribeToMany, unsubscribeFromMany } = useAlertsHub();

    const manySubscriptions = ref(false);
    const oneSubscriptions = ref<string[]>([]);

    onUnmounted(() => {
        if (manySubscriptions.value) {
            unsubscribeFromMany();
        }
        for (let subscription of oneSubscriptions.value) {
            unsubscribeFromOne(subscription);
        }
    })

    const watchOne = (alert: AlertDetails) => {
        subscribeToOne(alert.id);
        oneSubscriptions.value.push(alert.id);
    }

    const watchMany = () => {
        if (manySubscriptions.value === false) {
            subscribeToMany();
            manySubscriptions.value = true;
        }
    }

    return {
        watchOne,
        watchMany
    }
}

export const useAlert = ComposableFactory.get(AlertServiceFactory, () => {
    const { watchOne } = useWatchAlerts();
    return (alert: AlertDetails) => {
        watchOne(alert)
    }
});

export const useAlerts = ComposableFactory.getMany(AlertServiceFactory, () => {
    const { watchMany } = useWatchAlerts();
    return (_alert: AlertInfos) => {
        watchMany();
    }
});

export const useRemoveAlert = ComposableFactory.remove(AlertServiceFactory);
export const useAcknowledgeAlert = ComposableFactory.custom(AlertServiceFactory, AlertServiceFactory.acknowledge);