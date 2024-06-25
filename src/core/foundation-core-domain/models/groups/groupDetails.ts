import type { GroupInfosDTO } from "./groupInfos";
import { GroupInfos } from "./groupInfos";

export class GroupDetails extends GroupInfos {
    parentIcon: string | null;
    parentLabel: string | null;

    constructor(params: GroupDetailsDTO) {
        super(params);

        this.parentIcon = params.parentIcon;
        this.parentLabel = params.parentLabel;
    }
}

export interface GroupDetailsDTO extends GroupInfosDTO {
  parentIcon: string | null;
  parentLabel: string | null;
}

export interface CreateGroupDTO {
  parentId: string | null;
  image: string | null;
  icon: string;
  code: string;
  label: string;
  tags: string[];
}

export interface UpdateGroupDTO {
  parentId: string | null;
  imageId: string | null;
  image: string | null;
  icon: string;
  code: string;
  label: string;
  tags: string[];
}

export interface ChangeGroupParentDTO {
  parentId: string | null;
}