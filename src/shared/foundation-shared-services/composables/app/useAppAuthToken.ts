import { computed, ref } from "vue";

const authToken = ref<string | undefined>(undefined);

export const useAppAuthToken = () => {
    const setAppAuthToken = (payload: string) => {
        authToken.value = payload;
    };

    const ready = computed(() => authToken.value !== null);

    return {
        authToken,
        ready,
        setAppAuthToken
    };
}