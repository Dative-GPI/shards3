import { useLanguageCode, useTranslations } from "@dative-gpi/foundation-shared-services";

let initialized = false;

export const useTranslationsProvider = () => {
    const $tr = (code: string, defaultValue: string, ...parameters: string[]): string => {
        let translation = useTranslations().fetched.value.find(t => t.code === code)?.value ?? defaultValue;
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
            await useLanguageCode().ready;
            await useTranslations().fetch(useLanguageCode().languageCode.value!);
        }
    }

    return {
        $tr,
        init
    }
}