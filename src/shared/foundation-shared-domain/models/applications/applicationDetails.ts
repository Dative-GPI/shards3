import type { LanguageInfosDTO } from "../languages/languageInfos";
import { LanguageInfos } from "../languages/languageInfos";
import type { ApplicationInfosDTO } from "./applicationInfos";
import { ApplicationInfos } from "./applicationInfos";

export class ApplicationDetails extends ApplicationInfos {
    languages: LanguageInfos[];

    constructor(params: ApplicationDetailsDTO) {
        super(params);

        this.languages = params.languages.map((dto) => new LanguageInfos(dto));
    }
}

export interface ApplicationDetailsDTO extends ApplicationInfosDTO {
    languages: LanguageInfosDTO[];
}