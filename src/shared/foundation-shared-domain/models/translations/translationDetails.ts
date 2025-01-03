import type { TranslationInfosDTO } from "./translationInfos";
import { TranslationInfos } from "./translationInfos";

export class TranslationDetails extends TranslationInfos {
    constructor(params: TranslationDetailsDTO) {
        super(params);
    }
}

export interface TranslationDetailsDTO extends TranslationInfosDTO {
}