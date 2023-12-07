import { LanguageDetails, LanguageDetailsDTO, LanguageFilters, LanguageInfos, LanguageInfosDTO } from "@dative-gpi/foundation-core-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { LANGUAGES_URL, LANGUAGE_URL } from "../../config/urls";

const LanguageServiceFactory = new ServiceFactory<LanguageDetailsDTO, LanguageDetails>("language", LanguageDetails).create(factory => factory.build(
    factory.addGet(LANGUAGE_URL),
    factory.addGetMany<LanguageInfosDTO, LanguageInfos, LanguageFilters>(LANGUAGES_URL, LanguageInfos),
    factory.addNotify()
));

export const useLanguage = ComposableFactory.get(LanguageServiceFactory);
export const useLanguages = ComposableFactory.getMany(LanguageServiceFactory);