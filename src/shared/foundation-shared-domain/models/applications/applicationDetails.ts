import { LanguageInfos, type LanguageInfosDTO } from "../languages/languageInfos";
import { ApplicationInfos, type ApplicationInfosDTO } from "./applicationInfos";

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