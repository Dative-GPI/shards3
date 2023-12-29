import { onMounted, onUnmounted } from "vue";

export const useMounted = (callback: () => undefined | (() => any)) => {
    let unregister: (() => void) | undefined

    onMounted((): void => {
        console.log("callback from onMounted");
        unregister = callback();
    });

    onUnmounted((): void => {
        unregister?.();
    });
}