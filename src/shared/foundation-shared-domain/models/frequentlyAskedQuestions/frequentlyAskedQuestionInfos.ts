export class FrequentlyAskedQuestionInfos {
    id: string;
    question: string;
    answer: string;
    position: number;

    constructor(params: FrequentlyAskedQuestionInfosDTO) {
        this.id = params.id;
        this.question = params.question;
        this.answer = params.answer;
        this.position = params.position;
    }
}

export interface FrequentlyAskedQuestionInfosDTO {
    id: string;
    question: string;
    answer: string;
    position: number;
}

export interface FrequentlyAskedQuestionFilters {
    search?: string;
}