import { useAppLanguageCode  } from "../composables";

export const translate = <TTranslation extends { languageCode: string }>(
    translations: TTranslation[], 
    accessor: (item: TTranslation) => string, 
    defaultValue: string): string => {

    const { languageCode } = useAppLanguageCode();

    if(!languageCode.value) {
        return defaultValue;
    }

    const translation = translations.find(t => t.languageCode === languageCode.value);

    return translation ? accessor(translation) : defaultValue;
}