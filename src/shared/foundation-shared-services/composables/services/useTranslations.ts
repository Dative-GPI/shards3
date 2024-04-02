import { TranslationInfos, TranslationInfosDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { TRANSLATIONS_LANGUAGE_URL } from "../../config/urls";

const TranslationServiceFactory = {
    ...ServiceFactory.addCustom("getMany", (axios, languageCode: string) => axios.get(TRANSLATIONS_LANGUAGE_URL(languageCode)), (dtos: TranslationInfosDTO[]) => dtos.map(dto => new TranslationInfos(dto)))
};

export const useTranslations = ComposableFactory.custom(TranslationServiceFactory.getMany);