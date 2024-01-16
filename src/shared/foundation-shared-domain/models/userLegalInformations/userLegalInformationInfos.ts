export class UserLegalInformationInfos {
    userId: string;
    legalInformationId: string;

    constructor(params: UserLegalInformationInfosDTO) {
        this.userId = params.userId;
        this.legalInformationId = params.legalInformationId;
    }
}

export interface UserLegalInformationInfosDTO {
    userId: string;
    legalInformationId: string;
}