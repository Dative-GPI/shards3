import { onMounted, ref } from "vue";

import { useLanguageCode, useTimeZone } from "@dative-gpi/foundation-shared-services";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";
import { useTranslations } from "@dative-gpi/foundation-shared-services";

let called = false;

const ready = ref(false);

export function useShared() {
    if (called) {
        return {
            ready
        };
    }

    called = true;

    const { ready: languageCodeReady } = useLanguageCode();
    const { ready: timeZoneReady } = useTimeZone();

    onMounted(async () => {
        await languageCodeReady
        await timeZoneReady;

        const { languageCode } = useLanguageCode();

        const { set } = useTranslationsProvider();
        const { fetch } = useTranslations();

        if (languageCode.value) {
            const translations = await fetch(languageCode.value);
            set(translations.value);
        }

        ready.value = true;
    });

    return {
        ready
    };
}