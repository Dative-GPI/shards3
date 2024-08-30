import { computed, ref } from "vue";

import { type LanguageInfos } from "@dative-gpi/foundation-shared-domain/models";

const languages = ref<LanguageInfos[] | undefined>(undefined);

export const useAppLanguages = () => {
    const setAppLanguages = (payload: LanguageInfos[]) => {
        languages.value = payload;
    };

    const ready = computed(() => languages.value !== null);

    return {
        ready,
        languages,
        setAppLanguages
    };
}