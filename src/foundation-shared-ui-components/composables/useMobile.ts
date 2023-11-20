import { useDisplay } from "vuetify";
import { Ref, WatchStopHandle, onUnmounted, ref, watch } from "vue";

export interface Watcher<T> {
    value: Ref<T> | Ref<{ [key: string] : T }>;
    property?: string;
    web: T;
    mobile: T;
}

export const useMobile = () => {
    const { smAndDown: isMobile } = useDisplay();

    const stopWatch = ref<WatchStopHandle | null>(null);

    const toggle = (watchers: Watcher<any> | Watcher<any>[]): void => {
        if (Array.isArray(watchers)) {
            watchers.forEach((item) => {
                if (item.property) {
                    item.value.value[item.property] = isMobile.value ? item.mobile : item.web;
                }
                else {
                    item.value.value = isMobile.value ? item.mobile : item.web;
                }
            });
        }
        else {
            if (watchers.property) {
                watchers.value.value[watchers.property] = isMobile.value ? watchers.mobile : watchers.web;
            }
            else {
                watchers.value.value = isMobile.value ? watchers.mobile : watchers.web;
            }
        }
    }

    const startWatch = (watchers: Watcher<any> | Watcher<any>[]): void => {
        toggle(watchers);

        stopWatch.value = watch(isMobile, () => {
            toggle(watchers);
        });
    }

    onUnmounted(() => {
        if (stopWatch.value != null) {
            stopWatch.value();
        }
    });

    return {
        startWatch
    };
}
