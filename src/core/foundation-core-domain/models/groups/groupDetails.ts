import { GroupInfos, GroupInfosDTO } from "./groupInfos";

export class GroupDetails extends GroupInfos {
    parentIcon?: string;
    parentLabel?: string;

    constructor(params: GroupDetailsDTO) {
        super(params);

        this.parentIcon = params.parentIcon;
        this.parentLabel = params.parentLabel;
    }
}

export interface GroupDetailsDTO extends GroupInfosDTO {
    parentIcon?: string;
    parentLabel?: string;
}

export interface CreateGroupDTO {
    parentId?: string;
    image?: string;
    icon: string;
    code: string;
    label: string;
    tags: string[];
}

export interface UpdateGroupDTO {
    parentId?: string;
    imageId?: string;
    image?: string;
    icon: string;
    code: string;
    label: string;
    tags: string[];
}

export interface ChangeGroupParentDTO {
    parentId?: string;
}