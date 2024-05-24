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
    image: string | null;
    parentId: string | null;
}

export interface UpdateFolderDTO {
    label: string;
    icon: string;
    code: string;
    tags: string[];
    imageId: string | null;
    image: string | null;
    parentId: string | null;
}

export interface ChangeFolderParentDTO {
    parentId: string | null;
}