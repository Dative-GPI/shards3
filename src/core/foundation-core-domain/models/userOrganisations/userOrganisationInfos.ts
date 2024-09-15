import type { UserType, UserValidityState } from "@dative-gpi/foundation-shared-domain/enums";
import type { RoleType } from "@dative-gpi/foundation-shared-domain/enums";

export class UserOrganisationInfos {
  id: string;
  userId: string;
  organisationId: string;
  roleType: RoleType;
  roleId: string | null;
  roleLabel: string;
  roleIcon: string;
  admin: boolean;
  imageId: string | null;
  userType: UserType;
  validity: UserValidityState;
  allowNotifications: boolean;
  allowSms: boolean;
  allowEmails: boolean;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  name: string;
  tags: string[];

  constructor(params: UserOrganisationInfosDTO) {
    this.id = params.id;
    this.userId = params.userId;
    this.organisationId = params.organisationId;
    this.roleType = params.roleType;
    this.roleId = params.roleId;
    this.roleLabel = params.roleLabel;
    this.roleIcon = params.roleIcon;
    this.admin = params.admin;
    this.imageId = params.imageId;
    this.userType = params.userType;
    this.validity = params.validity;
    this.allowNotifications = params.allowNotifications;
    this.allowSms = params.allowSms;
    this.allowEmails = params.allowEmails;
    this.email = params.email;
    this.phoneNumber = params.phoneNumber;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.name = params.name;
    this.tags = params.tags && params.tags.slice() || [];
  }
}

export interface UserOrganisationInfosDTO {
  id: string;
  userId: string;
  organisationId: string;
  roleType: RoleType;
  roleId: string | null;
  roleLabel: string;
  roleIcon: string;
  admin: boolean;
  imageId: string | null;
  userType: UserType;
  validity: UserValidityState;
  allowNotifications: boolean;
  allowSms: boolean;
  allowEmails: boolean;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  name: string;
  tags: string[] | null;
}

export interface UserOrganisationFilters {
  userId?: string | null;
  userOrganisationsIds?: string[] | null;
  search?: string | null;
}