import { useLanguageCode, useTranslations } from "@dative-gpi/foundation-shared-services";

const { fetch, fetched } = useTranslations()
const { ready, languageCode } = useLanguageCode();

let initialized = false;

export const useTranslationsProvider = () => {
    const $tr = (code: string, defaultValue: string, ...parameters: string[]): string => {
        let translation = fetched.value.find(t => t.code === code)?.value ?? defaultValue;
        if (translation && parameters.length) {
            for (let p of parameters) {
                translation = translation.replace(`{${parameters.indexOf(p)}}`, p.toString());
            }
        }
        return translation;
    };

    const init = async () => {
        if (!initialized) {
            initialized = true;
            await ready;
            await fetch(languageCode.value!);
        }
    }

    return {
        $tr,
        init
    }
}