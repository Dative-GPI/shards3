export class UserInfos {
    id: string;
    imageId?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageBlurHash?: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
  
    constructor(params: UserInfosDTO) {
      this.id = params.id;
      this.imageId = params.imageId;
      this.imageWidth = params.imageWidth;
      this.imageHeight = params.imageHeight;
      this.imageBlurHash = params.imageBlurHash;
      this.email = params.email;
      this.phoneNumber = params.phoneNumber;
      this.firstName = params.firstName;
      this.lastName = params.lastName;
    }
  }
  
  export interface UserInfosDTO {
    id: string;
    imageId?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageBlurHash?: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
  }
  
  export interface UserFilters {
    search?: string;
  }