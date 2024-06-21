export class ApplicationInfos {
    id: string;
    fallbackLanguageCode: string;
    logoId: string | null;
    label: string;

    constructor(params: ApplicationInfosDTO) {
        this.id = params.id;
        this.fallbackLanguageCode = params.fallbackLanguageCode;
        this.logoId = params.logoId;
        this.label = params.label;
    }
}

export interface ApplicationInfosDTO {
    id: string;
    fallbackLanguageCode: string;
    logoId: string | null;
    label: string;
}