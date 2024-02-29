import { onMounted, ref, watch } from "vue";

import * as signalR from "@microsoft/signalr";

import { useNotifyAlert, useNotifyRemoveAlert } from "../services/useAlerts";
import { ALERTS_HUB_URL } from "../../config/urls";
import { HUBS } from "../../config/literals";

let initialized = false;

const connection = ref<signalR.HubConnection | null>(null);

export const useAlertsHub = () => {
    if (!initialized) {
        onMounted(async () => {
            if (!connection.value) {
                connection.value = new signalR.HubConnectionBuilder()
                    .withUrl(ALERTS_HUB_URL())
                    .configureLogging(signalR.LogLevel.Warning)
                    .withAutomaticReconnect()
                    .build(); 
            }
            if (connection.value.state !== signalR.HubConnectionState.Connected) {
                await connection.value.start();
            }
            connection.value.invoke(HUBS.SUBSCRIBE);
            connection.value.on(HUBS.CREATE_ALERT, (alertId: string) => useNotifyAlert().fetch(alertId));
            connection.value.on(HUBS.UPDATE_ALERT, (alertId: string) => useNotifyAlert().fetch(alertId));
            connection.value.on(HUBS.REMOVE_ALERT, (alertId: string) => useNotifyRemoveAlert().remove(alertId));
        });

        initialized = true;
    }

    const ready = new Promise((resolve) => {
        if (connection.value && connection.value.state === signalR.HubConnectionState.Connected) {
            resolve(true);
        }
        else {
            watch(connection, () => {
                if (connection.value && connection.value.state === signalR.HubConnectionState.Connected) {
                    resolve(true);
                }
            });
        }
    });

    return {
        ready
    };
}