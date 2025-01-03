import type { LanguageInfosDTO } from "./languageInfos";
import { LanguageInfos } from "./languageInfos";

export class LanguageDetails extends LanguageInfos {
    constructor(params: LanguageDetailsDTO) {
        super(params);
    }
}

export interface LanguageDetailsDTO extends LanguageInfosDTO {
}