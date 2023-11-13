import { PathCrumb, PathCrumbDTO } from "./pathCrumb";

export class GroupInfos {
    id: string;
    organisationId: string;
    parentId?: string;
    imageId?: string;
    imageBlurHash: string;
    imageHeight?: number;
    imageWidth?: number;
    icon: string;
    code: string;
    label: string;
    tags: string[];
    path: PathCrumb[];
    groupsIds: string[];
    deviceOrganisationsIds: string[];
    modelsIds: string[];
    recursiveGroupsIds: string[];
    recursiveDeviceOrganisationsIds: string[];
    recursiveModelsIds: string[];

    constructor(params: GroupInfosDTO) {
        this.id = params.id;
        this.organisationId = params.organisationId;
        this.parentId = params.parentId;
        this.imageId = params.imageId;
        this.imageBlurHash = params.imageBlurHash;
        this.imageHeight = params.imageHeight;
        this.imageWidth = params.imageWidth;
        this.icon = params.icon;
        this.code = params.code;
        this.label = params.label;
        this.tags = params.tags;
        this.path = params.path.map(dto => new PathCrumb({ ...dto })).sort((a, b) => b.index - a.index);
        this.groupsIds = params.groupsIds.slice();
        this.deviceOrganisationsIds = params.deviceOrganisationsIds.slice();
        this.modelsIds = params.modelsIds.slice();
        this.recursiveGroupsIds = params.recursiveGroupsIds.slice();
        this.recursiveDeviceOrganisationsIds = params.recursiveDeviceOrganisationsIds.slice();
        this.recursiveModelsIds = params.recursiveModelsIds.slice();
    }
}

export interface GroupInfosDTO {
    id: string;
    organisationId: string;
    parentId?: string;
    imageId?: string;
    imageBlurHash: string;
    imageHeight?: number;
    imageWidth?: number;
    icon: string;
    code: string;
    label: string;
    tags: string[];
    path: PathCrumbDTO[];
    groupsIds: string[];
    deviceOrganisationsIds: string[];
    modelsIds: string[];
    recursiveGroupsIds: string[];
    recursiveDeviceOrganisationsIds: string[];
    recursiveModelsIds: string[];
}

export interface GroupFilters {
    parentId?: string;
    root?: boolean;
    modelsIds?: string[];
    groupsIds?: string[];
    search?: string;
}