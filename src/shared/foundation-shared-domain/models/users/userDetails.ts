import type { UserInfosDTO } from "./userInfos";
import { UserInfos } from "./userInfos";

export class UserDetails extends UserInfos {
    adminAccess: boolean;
    hasSignedPolicies: boolean;
    languageCode: string;
    timeZoneId: string;
    timeZoneOffset: string;
    allowNotifications: boolean;
    allowSms: boolean;
    allowEmails: boolean;

    constructor(params: UserDetailsDTO) {
        super(params);

        this.adminAccess = params.adminAccess;
        this.hasSignedPolicies = params.hasSignedPolicies;
        this.languageCode = params.languageCode;
        this.timeZoneId = params.timeZoneId;
        this.timeZoneOffset = params.timeZoneOffset;
        this.allowNotifications = params.allowNotifications;
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
    allowNotifications: boolean;
    allowSms: boolean;
    allowEmails: boolean;
}

export interface UpdateCurrentUserDTO {
    languageCode: string;
    timeZoneId: string;
    imageId: string | null;
    image: string | null;
    allowNotifications: boolean;
    allowSms: boolean;
    allowEmails: boolean;
    phoneNumber: string;
    firstName: string;
    lastName: string;
}

export interface UpdateCurrentUserEmailDTO {
    password: string;
    email: string;
}