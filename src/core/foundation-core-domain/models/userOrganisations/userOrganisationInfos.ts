import { UserType, UserValidityState } from "../enums/userEnums";
import { RoleType } from "../enums/roleEnums";

export class UserOrganisationInfos {
    id: string;
    userId: string;
    organisationId: string;
    roleType: RoleType;
    roleId?: string;
    roleLabel: string;
    roleIcon: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    userType: UserType;
    validity: UserValidityState;
    allowSms: boolean;
    allowEmails: boolean;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    name: string;
    label: string;
    description: string;
    tags: string[];

    constructor(params: UserOrganisationInfosDTO) {
        this.id = params.id;
        this.userId = params.userId;
        this.organisationId = params.organisationId;
        this.roleType = params.roleType;
        this.roleId = params.roleId;
        this.roleLabel = params.roleLabel;
        this.roleIcon = params.roleIcon;
        this.imageId = params.imageId;
        this.imageBlurHash = params.imageBlurHash;
        this.imageHeight = params.imageHeight;
        this.imageWidth = params.imageWidth;
        this.userType = params.userType;
        this.validity = params.validity;
        this.allowSms = params.allowSms;
        this.allowEmails = params.allowEmails;
        this.email = params.email;
        this.phoneNumber = params.phoneNumber;
        this.firstName = params.firstName;
        this.lastName = params.lastName;
        this.name = params.name ?? params.label;
        this.label = params.name ?? params.label;
        this.description = params.description;
        this.tags = params.tags && params.tags.slice() || [];
    }
}

export interface UserOrganisationInfosDTO {
    id: string;
    userId: string;
    organisationId: string;
    roleType: RoleType;
    roleId?: string;
    roleLabel: string;
    roleIcon: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    userType: UserType;
    validity: UserValidityState;
    allowSms: boolean;
    allowEmails: boolean;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    name: string;
    label: string;
    description: string;
    tags: string[] | null;
}

export interface UserOrganisationFilters {
    userType?: UserType;
    search?: string;
}