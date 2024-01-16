import { FrequentlyAskedQuestionInfos, FrequentlyAskedQuestionInfosDTO } from "./frequentlyAskedQuestionInfos";

export class FrequentlyAskedQuestionDetails extends FrequentlyAskedQuestionInfos {
    constructor(params: FrequentlyAskedQuestionDetailsDTO) {
        super(params);
    }
}

export interface FrequentlyAskedQuestionDetailsDTO extends FrequentlyAskedQuestionInfosDTO {
}