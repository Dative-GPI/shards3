import { onMounted, ref } from "vue";
import { useLanguageCode, useTimeZone, useTranslationsProvider } from "@dative-gpi/foundation-shared-services";

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

    const { init: initTranslations } = useTranslationsProvider();

    onMounted(async () => {
        await languageCodeReady
        await timeZoneReady;
        await initTranslations();
        ready.value = true;
    });

    return {
        ready
    };
}