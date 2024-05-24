export class UserInfos {
    id: string;
    imageId: string | null;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
  
    constructor(params: UserInfosDTO) {
      this.id = params.id;
      this.imageId = params.imageId;
      this.email = params.email;
      this.phoneNumber = params.phoneNumber;
      this.firstName = params.firstName;
      this.lastName = params.lastName;
    }
  }
  
  export interface UserInfosDTO {
    id: string;
    imageId: string | null;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
  }
  
  export interface UserFilters {
    search: string | null;
  }