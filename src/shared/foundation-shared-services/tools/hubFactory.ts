import { computed, onUnmounted, ref, watch } from "vue";
import * as signalR from "@microsoft/signalr";

export class HubFactory {
    static create(
        url: string | (() => string),
        configureHooks: (connection: signalR.HubConnection,
            { isWatched, hasWatchers }: { isWatched: (id: string) => boolean, hasWatchers: () => boolean }) => void,
        init: (connection: signalR.HubConnection) => Promise<void>) {

        let connection: signalR.HubConnection | null = null;
        let subscribed = false;
        let watchManySubscribers = 0;
        const watcheds = ref<string[]>([]);

        return () => {
            const connect = async () => {
                if (!connection) {
                    connection = new signalR.HubConnectionBuilder()
                        .withUrl(typeof url == "string" ? url : url())
                        .configureLogging(signalR.LogLevel.Warning)
                        .withAutomaticReconnect()
                        .build();

                    configureHooks(connection, {
                        isWatched: (id: string) => watcheds.value.includes(id),
                        hasWatchers: () => watchManySubscribers > 0,
                    })
                }
                if (connection.state !== signalR.HubConnectionState.Connected) {
                    try {
                        await connection.start();
                    }
                    catch {
                        return;
                    }
                }
                if (!subscribed) {
                    await init(connection);
                    subscribed = true;
                }
            }

            const disconnect = async () => {
                if (connection) {
                    await connection.stop();
                    connection = null;
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
                if (index > -1) {watcheds.value = watcheds.value.splice(index, 1);}
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
    }

    static createWatcher(factory: ReturnType<typeof this.create>) {
        return () => {
            const { subscribeToOne, unsubscribeFromOne, subscribeToMany, unsubscribeFromMany } = factory();

            const manySubscriptions = ref(false);
            const oneSubscriptions = ref<string[]>([]);

            onUnmounted(() => {
                if (manySubscriptions.value) {
                    unsubscribeFromMany();
                }
                for (const subscription of oneSubscriptions.value) {
                    unsubscribeFromOne(subscription);
                }
            })

            const watchOne = (id: string) => {
                subscribeToOne(id);
                oneSubscriptions.value.push(id);
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
    }
} 