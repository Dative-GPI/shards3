export class UserLegalInformationInfos {
    id: string;
    userId: string;
    legalInformationId: string;

    constructor(params: UserLegalInformationInfosDTO) {
        this.id = params.id;
        this.userId = params.userId;
        this.legalInformationId = params.legalInformationId;
    }
}

export interface UserLegalInformationInfosDTO {
    id: string;
    userId: string;
    legalInformationId: string;
}