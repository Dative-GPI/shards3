export class ApplicationInfos {
    id: string;
    fallbackLanguageCode: string;
    logoId?: string;
    logoBlurHash?: string;
    logoHeight?: string;
    logoWidth?: string;
    label: string;

    constructor(params: ApplicationInfosDTO) {
        this.id = params.id;
        this.fallbackLanguageCode = params.fallbackLanguageCode;
        this.logoId = params.logoId;
        this.logoBlurHash = params.logoBlurHash;
        this.logoHeight = params.logoHeight;
        this.logoWidth = params.logoWidth;
        this.label = params.label;
    }
}

export interface ApplicationInfosDTO {
    id: string;
    fallbackLanguageCode: string;
    logoId?: string;
    logoBlurHash?: string;
    logoHeight?: string;
    logoWidth?: string;
    label: string;
}