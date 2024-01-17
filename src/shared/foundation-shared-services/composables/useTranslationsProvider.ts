import { useLanguageCode, useTranslations } from "@dative-gpi/foundation-shared-services";

const { fetch, fetched } = useTranslations()
const { ready, languageCode } = useLanguageCode();

let initialized = false;

export const useTranslationsProvider = () => {
    const $tr = (code: string, defaultValue: string | null): string | null => {
        const t = fetched.value.find(t => t.code === code);
        return t ? t.value : defaultValue
    };

    const get = (code: string): string | null => $tr(code, null);

    const init = async () => {
        if (!initialized) {
            initialized = true;
            await ready;
            await fetch(languageCode.value!);
        }
    }

    return {
        $tr,
        get,
        init
    }
}