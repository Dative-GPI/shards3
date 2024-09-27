import type { DeviceOrganisationOptionDTO } from "./deviceOrganisationOption";
import { DeviceOrganisationOption } from "./deviceOrganisationOption";
import type { DeviceOrganisationInfosDTO } from "./deviceOrganisationInfos";
import { DeviceOrganisationInfos } from "./deviceOrganisationInfos";
import type { PathCrumbDTO } from "../shared/pathCrumb";
import { PathCrumb } from "../shared/pathCrumb";

export class DeviceOrganisationDetails extends DeviceOrganisationInfos {
    articleCode: string;
    familyId: string;
    familyLabel: string;
    options: DeviceOrganisationOption[];
    path: PathCrumb[];

    constructor(params: DeviceOrganisationDetailsDTO) {
        super(params);

        this.articleCode = params.articleCode;
        this.familyId = params.familyId;
        this.familyLabel = params.familyLabel;
        this.options = params.options.map(dto => new DeviceOrganisationOption({ ...dto }));
        this.path = params.path.map(dto => new PathCrumb({ ...dto })).sort((a, b) => b.index - a.index);
    }
}

export interface DeviceOrganisationDetailsDTO extends DeviceOrganisationInfosDTO {
    articleCode: string;
    familyId: string;
    familyLabel: string;
    options: DeviceOrganisationOptionDTO[];
    path: PathCrumbDTO[];
}

export interface CreateDeviceOrganisationDTO {
    manufacturerId: string;
    managerId: string | null;
    locationId: string | null;
    groupId: string | null;
    code: string;
    label: string;
    description: string;
    tags: string[];
    meta: { [key: string]: string };
}

export interface UpdateDeviceOrganisationDTO {
    managerId: string | null;
    locationId: string | null;
    groupId: string | null;
    imageId: string | null;
    image: string | null;
    label: string;
    description: string;
    tags: string[];
    meta: { [key: string]: string };
}

export interface ChangeDeviceOrganisationGroupDTO {
    groupId: string | null;
}

export interface ChangeDeviceOrganisationLocationDTO {
    locationId: string | null;
}