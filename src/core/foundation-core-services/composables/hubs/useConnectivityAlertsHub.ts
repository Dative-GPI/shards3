import { onMounted, ref, watch } from "vue";

import * as signalR from "@microsoft/signalr";

import { CONNECTIVITY_ALERTS_HUB_URL } from "../../config/urls";
import { HUBS } from "../../config/literals";

let initialized = false;

const connection = ref<signalR.HubConnection | null>(null);

export const useConnectivityAlertsHub = () => {
    if (!initialized) {
        onMounted(async () => {
            if (!connection.value) {
                connection.value = new signalR.HubConnectionBuilder()
                    .withUrl(CONNECTIVITY_ALERTS_HUB_URL())
                    .configureLogging(signalR.LogLevel.Warning)
                    .withAutomaticReconnect()
                    .build(); 
            }
            if (connection.value.state !== signalR.HubConnectionState.Connected) {
                await connection.value.start();
            }
            connection.value.invoke(HUBS.SUBSCRIBE);
            // connection.value.on(HUBS.CREATE_CONNECTIVITY_ALERT, (connectivityAlertId: string) => useNotifyConnectivityAlert().fetch(connectivityAlertId));
            // connection.value.on(HUBS.UPDATE_CONNECTIVITY_ALERT, (connectivityAlertId: string) => useNotifyConnectivityAlert().fetch(connectivityAlertId));
            // connection.value.on(HUBS.REMOVE_CONNECTIVITY_ALERT, (connectivityAlertId: string) => useNotifyRemoveConnectivityAlert().remove(connectivityAlertId));
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