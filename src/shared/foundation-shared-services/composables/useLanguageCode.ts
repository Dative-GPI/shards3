import { ref, watch } from "vue";

const languageCode = ref<string | null>("fr-FR");

export const useLanguageCode = () => {
    const setLanguageCode = (payload: string) => {
        languageCode.value = payload;
    };

    const ready = new Promise((resolve) => {
        if (languageCode.value) {
            resolve(languageCode.value);
        }
        else {
            watch(languageCode, () => {
                if (languageCode.value) {
                    resolve(languageCode.value);
                }
            });
        }
    });

    return {
        ready,
        languageCode,
        setLanguageCode
    };
}