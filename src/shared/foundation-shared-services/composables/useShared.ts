import { onMounted, ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import { useTranslations } from "./services/useTranslations";
import { useLanguageCode } from "./useLanguageCode";
import { useTimeZone } from "./useTimeZone";

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
    const { fetch, fetched } = useTranslations();

    onMounted(async () => {
        await languageCodeReady
        await timeZoneReady;
        if (useLanguageCode().languageCode.value) {
            await fetch(useLanguageCode().languageCode.value!);
            useTranslationsProvider().set(fetched.value.map(t => ({ code: t.code, value: t.value })));
            console.log("Translations fetched and set");
        }
        ready.value = true;
    });

    return {
        ready
    };
}