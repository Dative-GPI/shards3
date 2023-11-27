import { onMounted, provide, ref, watch } from "vue";

import { LANGUAGE_CODE } from "../config/literals";

let initialized = false;

const languageCode = ref<string | null>(null);

export const useLanguageCode = () => {
    const setLanguageCode = (payload: string) => {
        localStorage.setItem(LANGUAGE_CODE, payload);
        languageCode.value = payload;
    };

    if (!initialized) {
        provide(LANGUAGE_CODE, languageCode);

        onMounted(() => {
            if (languageCode.value) {
                return;
            }
            if (localStorage.getItem(LANGUAGE_CODE) != null) {
                languageCode.value = localStorage.getItem(LANGUAGE_CODE);
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