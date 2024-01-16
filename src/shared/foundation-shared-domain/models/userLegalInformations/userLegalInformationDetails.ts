import { UserLegalInformationInfos, UserLegalInformationInfosDTO } from "./userLegalInformationInfos";

export class UserLegalInformationDetails extends UserLegalInformationInfos {
    constructor(params: UserLegalInformationDetailsDTO) {
        super(params);
    }
}

export interface UserLegalInformationDetailsDTO extends UserLegalInformationInfosDTO {
}

export interface CreateUserLegalInformationDTO {
    legalInformationId: string;
    acceptGeneralConditions: boolean;
    acceptPrivacyPolicy: boolean;
}