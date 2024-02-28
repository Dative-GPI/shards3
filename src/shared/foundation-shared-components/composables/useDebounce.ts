import { ref, Ref } from "vue";

export const useDebounce = () => {
    const timeOutId: Ref<NodeJS.Timeout | null> = ref(null);

    const debounce = (callback: Function, wait: number, ...args: any[]): void => {
        cancel();
        timeOutId.value = setTimeout(() => callback(...args), wait);
    };

    const cancel = (): void => {
        if (timeOutId.value) {
            clearTimeout(timeOutId.value);
            timeOutId.value = null;
        }
    };

    return {
        debounce,
        cancel
    };
}