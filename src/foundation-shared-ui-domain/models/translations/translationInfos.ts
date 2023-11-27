export class TranslationInfos {
    id: string;
    code: string;
    value: string;

    constructor(params: TranslationInfosDTO) {
        this.id = params.id;
        this.code = params.code;
        this.value = params.value;
    }
}

export interface TranslationInfosDTO {
    id: string;
    code: string;
    value: string;
}