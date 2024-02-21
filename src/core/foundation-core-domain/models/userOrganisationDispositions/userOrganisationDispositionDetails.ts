import { UserOrganisationDispositionInfos, UserOrganisationDispositionInfosDTO } from "./userOrganisationDispositionInfos";

export class UserOrganisationDispositionDetails extends UserOrganisationDispositionInfos {
    constructor(dto: UserOrganisationDispositionDetailsDTO) {
        super(dto);
    }
}

export interface UserOrganisationDispositionDetailsDTO extends UserOrganisationDispositionInfosDTO {
}

export interface UpdateUserOrganisationDispositionDTO {
    columnId: string;
    index: number;
    hidden: boolean;
}