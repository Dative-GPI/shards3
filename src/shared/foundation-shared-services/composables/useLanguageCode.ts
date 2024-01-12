import { onMounted, provide, ref, watch } from "vue";

import { LANGUAGE_CODE } from "../config/literals";

let initialized = false;

const languageCode = ref<string | null>("fr-FR");

export const useLanguageCode = () => {
    const setLanguageCode = (payload: string) => {
        languageCode.value = payload;
    };

    if (!initialized) {
        provide(LANGUAGE_CODE, languageCode);

        onMounted(() => {
            if (languageCode.value) {
                return;
            }
        });
    }

    initialized = true;

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