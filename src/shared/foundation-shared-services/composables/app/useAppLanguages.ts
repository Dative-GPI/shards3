import { computed, ref } from "vue";

import { type LanguageInfos } from "@/shared/foundation-shared-domain";

const languages = ref<LanguageInfos[] | undefined>(undefined);

export const useAppLanguages = () => {
    const sepAppLanguages = (payload: LanguageInfos[]) => {
        languages.value = payload;
    };

    const ready = computed(() => languages.value !== null);

    return {
        ready,
        languages,
        sepAppLanguages
    };
}