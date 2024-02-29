import { FrequentlyAskedQuestionDetails, FrequentlyAskedQuestionDetailsDTO, FrequentlyAskedQuestionFilters, FrequentlyAskedQuestionInfos, FrequentlyAskedQuestionInfosDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { FREQUENTLY_ASKED_QUESTIONS_URL } from "../../config/urls";

const FrequentlyAskedQuestionServiceFactory = new ServiceFactory<FrequentlyAskedQuestionDetailsDTO, FrequentlyAskedQuestionDetails>("frequentlyAskedQuestions", FrequentlyAskedQuestionDetails).create(factory => factory.build(
    factory.addGetMany<FrequentlyAskedQuestionInfosDTO, FrequentlyAskedQuestionInfos, FrequentlyAskedQuestionFilters>(FREQUENTLY_ASKED_QUESTIONS_URL, FrequentlyAskedQuestionInfos),
    factory.addNotify()
));

export const useFrequentlyAskedQuestions = ComposableFactory.getMany(FrequentlyAskedQuestionServiceFactory);