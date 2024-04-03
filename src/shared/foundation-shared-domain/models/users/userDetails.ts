import { UserInfos, UserInfosDTO } from "./userInfos";

export class UserDetails extends UserInfos {
    adminAccess: boolean;
    hasSignedPolicies: boolean;
    languageCode: string;
    timeZoneId: string;
    timeZoneOffset: string;
    allowSms: boolean;
    allowEmails: boolean;

    constructor(params: UserDetailsDTO) {
        super(params);

        this.adminAccess = params.adminAccess;
        this.hasSignedPolicies = params.hasSignedPolicies;
        this.languageCode = params.languageCode;
        this.timeZoneId = params.timeZoneId;
        this.timeZoneOffset = params.timeZoneOffset;
        this.allowSms = params.allowSms;
        this.allowEmails = params.allowEmails;
    }
}

export interface UserDetailsDTO extends UserInfosDTO {
    adminAccess: boolean;
    hasSignedPolicies: boolean;
    languageCode: string;
    timeZoneId: string;
    timeZoneOffset: string;
    allowSms: boolean;
    allowEmails: boolean;
}

export interface UpdateUserDTO {
    languageCode: string;
    timeZoneId: string;
    imageId?: string;
    image?: string;
    allowSms: boolean;
    allowEmails: boolean;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    label: string;
    description: string;
}