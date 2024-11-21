import { LanguageInfos, type LanguageInfosDTO } from "./languageInfos";

export class LanguageDetails extends LanguageInfos {
    constructor(params: LanguageDetailsDTO) {
        super(params);
    }
}

export interface LanguageDetailsDTO extends LanguageInfosDTO {
}