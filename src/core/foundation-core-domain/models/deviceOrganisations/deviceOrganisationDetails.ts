import { DeviceOrganisationOption, DeviceOrganisationOptionDTO } from "./deviceOrganisationOption";
import { DeviceOrganisationInfos, DeviceOrganisationInfosDTO } from "./deviceOrganisationInfos";
import { PathCrumb, PathCrumbDTO } from "../shared/pathCrumb";

export class DeviceOrganisationDetails extends DeviceOrganisationInfos {
    articleCode: string;
    familyId: string;
    familyLabel: string;
    description: string;
    options: DeviceOrganisationOption[];
    path: PathCrumb[];

    constructor(params: DeviceOrganisationDetailsDTO) {
        super(params);

        this.articleCode = params.articleCode;
        this.familyId = params.familyId;
        this.familyLabel = params.familyLabel;
        this.description = params.description;
        this.options = params.options.map(dto => new DeviceOrganisationOption({ ...dto }));
        this.path = params.path.map(dto => new PathCrumb({ ...dto })).sort((a, b) => b.index - a.index);
    }
}

export interface DeviceOrganisationDetailsDTO extends DeviceOrganisationInfosDTO {
    articleCode: string;
    familyId: string;
    familyLabel: string;
    description: string;
    options: DeviceOrganisationOptionDTO[];
    path: PathCrumbDTO[];
}

export interface CreateDeviceOrganisationDTO {
    manufacturerId: string;
    managerId?: string;
    locationId?: string;
    groupId?: string;
    code: string;
    label: string;
    description: string;
    tags: string[];
    meta: { [key: string]: string };
}

export interface UpdateDeviceOrganisationDTO {
    managerId?: string;
    locationId?: string;
    groupId?: string;
    imageId?: string;
    image?: string;
    label: string;
    description: string;
    tags: string[];
    meta: { [key: string]: string };
}

export interface ChangeDeviceOrganisationGroupDTO {
    groupId?: string;
}

export interface ChangeDeviceOrganisationLocationDTO {
    locationId?: string;
}