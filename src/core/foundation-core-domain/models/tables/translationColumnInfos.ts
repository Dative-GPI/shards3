export class TranslationColumnInfo {
    languageCode: string;
    label: string;


    constructor(dto: TranslationColumnInfosDTO) {
        this.languageCode = dto.languageCode;
        this.label = dto.label;
    }
}

export interface TranslationColumnInfosDTO {
    languageCode: string;
    label: string;
}