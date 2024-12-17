import { TranslationInfos, type TranslationInfosDTO } from "./translationInfos";

export class TranslationDetails extends TranslationInfos {
    constructor(params: TranslationDetailsDTO) {
        super(params);
    }
}

export interface TranslationDetailsDTO extends TranslationInfosDTO {
}