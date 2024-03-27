import { computed, ref, watch } from "vue";

const languageCode = ref<string | null>(null);

export const useAppLanguageCode = () => {
    const setLanguageCode = (payload: string) => {
        languageCode.value = payload;
    };

    const ready = computed(() => languageCode.value !== null);

    return {
        ready,
        languageCode,
        setLanguageCode
    };
}