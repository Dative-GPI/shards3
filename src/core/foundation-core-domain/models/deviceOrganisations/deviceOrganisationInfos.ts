import { DeviceConnectivityDetails, DeviceConnectivityDetailsDTO } from "../deviceConnectivities/deviceConnectivityDetails";
import { DeviceStatusDetails, DeviceStatusDetailsDTO } from "../deviceStatuses/deviceStatusDetails";
import { DeviceOrganisationAlert, DeviceOrganisationAlertDTO } from "./deviceOrganisationAlert";
import { ModelStatusInfos, ModelStatusInfosDTO } from "../modelStatuses/modelStatusInfos";
import { DeviceStatusDTO } from "../deviceStatuses/deviceStatusInfos";

export class DeviceOrganisationInfos {
    id: string;
    deviceId: string;
    manufacturerId: string;
    manufacturerLabel: string;
    articleId: string;
    articleLabel: string;
    modelId: string;
    modelLabel: string;
    ownerId?: string;
    ownerLabel?: string;
    organisationId: string;
    managerId?: string;
    managerName?: string;
    locationId?: string;
    locationLabel?: string;
    locationAddress?: string;
    groupId?: string;
    groupLabel?: string;
    groupIcon?: string;
    label: string;
    code: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    tags: string[];
    unrestricted: boolean;
    online: number;
    meta: { [key: string]: string };
    modelStatuses: ModelStatusInfos[];
    status?: DeviceStatusDetails;
    connectivity?: DeviceConnectivityDetails;
    alerts: DeviceOrganisationAlert[];
    worstAlert?: DeviceOrganisationAlert;

    get connectable(): DeviceConnectivityDetails | undefined {
        return this.connectivity;
    }

    constructor(params: DeviceOrganisationInfosDTO) {
        this.id = params.id;
        this.deviceId = params.deviceId;
        this.manufacturerId = params.manufacturerId;
        this.manufacturerLabel = params.manufacturerLabel;
        this.articleId = params.articleId;
        this.articleLabel = params.articleLabel;
        this.modelId = params.modelId;
        this.modelLabel = params.modelLabel;
        this.ownerId = params.ownerId;
        this.ownerLabel = params.ownerLabel;
        this.organisationId = params.organisationId;
        this.managerId = params.managerId;
        this.managerName = params.managerName;
        this.locationId = params.locationId;
        this.locationLabel = params.locationLabel;
        this.locationAddress = params.locationAddress;
        this.groupId = params.groupId;
        this.groupLabel = params.groupLabel;
        this.groupIcon = params.groupIcon;
        this.label = params.label;
        this.code = params.code;
        this.imageId = params.imageId;
        this.imageBlurHash = params.imageBlurHash;
        this.imageHeight = params.imageHeight;
        this.imageWidth = params.imageWidth;
        this.tags = params.tags.slice();
        this.unrestricted = params.unrestricted;
        this.online = params.online;
        this.meta = { ...params.meta };
        this.modelStatuses = params.modelStatuses.map(dto => new ModelStatusInfos(dto));
        this.status = params.status != null ? new DeviceStatusDetails({ statuses: params.status, id: params.id }) : undefined; //new DeviceStatusDetails(params.status);
        this.connectivity = params.connectivity != null ? new DeviceConnectivityDetails({ ...params.connectivity, id: params.id }) : undefined; //new DeviceConnectivityDetails(params.connectivity);
        this.alerts = params.alerts.map(dto => new DeviceOrganisationAlert(dto));
        this.worstAlert = params.worstAlert != null ? new DeviceOrganisationAlert(params.worstAlert) : undefined;
    }
}

export interface DeviceOrganisationInfosDTO {
    id: string;
    deviceId: string;
    manufacturerId: string;
    manufacturerLabel: string;
    articleId: string;
    articleLabel: string;
    modelId: string;
    modelLabel: string;
    ownerId?: string;
    ownerLabel?: string;
    organisationId: string;
    managerId?: string;
    managerName?: string;
    locationId?: string;
    locationLabel?: string;
    locationAddress?: string;
    groupId?: string;
    groupLabel?: string;
    groupIcon?: string;
    label: string;
    code: string;
    imageId?: string;
    imageBlurHash?: string;
    imageHeight?: number;
    imageWidth?: number;
    tags: string[];
    unrestricted: boolean;
    online: number;
    meta: { [key: string]: string };
    modelStatuses: ModelStatusInfosDTO[];
    status: DeviceStatusDTO[];
    connectivity: DeviceConnectivityDetailsDTO;
    alerts: DeviceOrganisationAlertDTO[];
    worstAlert?: DeviceOrganisationAlertDTO;
}

export interface DeviceOrganisationFilters {
    locationId?: string;
    otherLocationId?: string;
    groupId?: string;
    otherGroupId?: string;
    root?: boolean;
    unrestricted?: boolean;
    modelsIds?: string[];
    deviceOrganisationsIds?: string[];
    otherDeviceOrganisationsIds?: string[];
    search?: string;
}