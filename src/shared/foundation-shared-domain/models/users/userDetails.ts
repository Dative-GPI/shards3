import { UserInfos, UserInfosDTO } from "./userInfos";

export class UserDetails extends UserInfos {
    adminAccess: boolean;
    languageCode: string;
    timeZoneId: string;
    allowSms: boolean;
    allowEmails: boolean;

    constructor(params: UserDetailsDTO) {
        super(params);

        this.adminAccess = params.adminAccess;
        this.languageCode = params.languageCode;
        this.timeZoneId = params.timeZoneId;
        this.allowSms = params.allowSms;
        this.allowEmails = params.allowEmails;
    }
}

export interface UserDetailsDTO extends UserInfosDTO {
    adminAccess: boolean;
    languageCode: string;
    timeZoneId: string;
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