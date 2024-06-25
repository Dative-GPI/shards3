import type { LanguageDetailsDTO, LanguageFilters, LanguageInfosDTO } from "@dative-gpi/foundation-shared-domain/models";
import { LanguageDetails, LanguageInfos } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { APPLICATION_LANGUAGES_URL, APPLICATION_LANGUAGE_URL } from "../../config/urls";

const ApplicationLanguageServiceFactory = new ServiceFactory<LanguageDetailsDTO, LanguageDetails>("applicationLanguage", LanguageDetails).create(factory => factory.build(
    factory.addGet(APPLICATION_LANGUAGE_URL),
    factory.addGetMany<LanguageInfosDTO, LanguageInfos, LanguageFilters>(APPLICATION_LANGUAGES_URL, LanguageInfos),
    factory.addNotify()
));

export const useApplicationLanguages = ComposableFactory.getMany(ApplicationLanguageServiceFactory);