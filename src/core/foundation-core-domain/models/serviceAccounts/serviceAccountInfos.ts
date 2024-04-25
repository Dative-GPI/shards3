import { UserType, UserValidityState } from "../enums/userEnums";
import { RoleType } from "../enums/roleEnums";

export class ServiceAccountInfos {
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
  label: string;
  description: string;
  tags: string[];

  constructor(params: ServiceAccountInfosDTO) {
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
    this.label = params.label;
    this.description = params.description;
    this.tags = params.tags && params.tags.slice() || [];
  }
}

export interface ServiceAccountInfosDTO {
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
  label: string;
  description: string;
  tags: string[] | null;
}

export interface ServiceAccountFilters {
  search?: string;
}