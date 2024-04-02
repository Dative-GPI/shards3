import { computed, ref } from "vue";

const languageCode = ref<string | undefined>(undefined);

export const useAppLanguageCode = () => {
    const setAppLanguageCode = (payload: string) => {
        languageCode.value = payload;
    };

    const ready = computed(() => languageCode.value !== null);

    return {
        ready,
        languageCode,
        setAppLanguageCode
    };
}