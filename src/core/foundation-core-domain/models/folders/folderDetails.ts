import { FolderInfos, FolderInfosDTO } from "./folderInfos";

export class FolderDetails extends FolderInfos {
    constructor(params: FolderDetailsDTO) {
        super(params);
    }
}

export interface FolderDetailsDTO extends FolderInfosDTO {
}

export interface CreateFolderDTO {
    label: string;
    icon: string;
    code: string;
    tags: string[];
    image?: string;
    parentId?: string;
}

export interface UpdateFolderDTO {
    label: string;
    icon: string;
    code: string;
    tags: string[];
    imageId?: string;
    image?: string;
    parentId?: string;
}

export interface ChangeFolderParentDTO {
    parentId?: string;
}