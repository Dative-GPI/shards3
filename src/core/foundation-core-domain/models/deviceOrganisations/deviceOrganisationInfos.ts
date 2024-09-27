import type { DeviceConnectivityDetailsDTO } from "../deviceConnectivities/deviceConnectivityDetails";
import { DeviceConnectivityDetails } from "../deviceConnectivities/deviceConnectivityDetails";
import type { DeviceStatusDetailsDTO } from "../deviceStatuses/deviceStatusDetails";
import { DeviceStatusDetails } from "../deviceStatuses/deviceStatusDetails";
import type { DeviceOrganisationAlertDTO } from "./deviceOrganisationAlert";
import { DeviceOrganisationAlert } from "./deviceOrganisationAlert";
import type { ModelStatusInfosDTO } from "../modelStatuses/modelStatusInfos";
import { ModelStatusInfos } from "../modelStatuses/modelStatusInfos";

export class DeviceOrganisationInfos {
  id: string;
  deviceId: string;
  manufacturerId: string;
  manufacturerLabel: string;
  articleId: string;
  articleLabel: string;
  modelId: string;
  modelLabel: string;
  ownerId: string | null;
  ownerLabel: string | null;
  organisationId: string | null;
  managerId: string | null;
  managerName: string | null;
  locationId: string | null;
  locationLabel: string | null;
  locationAddress: string | null;
  groupId: string | null;
  groupLabel: string | null;
  groupIcon: string | null;
  label: string;
  code: string;
  description: string;
  imageId: string | null;
  tags: string[];
  unrestricted: boolean;
  online: number;
  meta: { [key: string]: string };
  modelStatuses: ModelStatusInfos[];
  status: DeviceStatusDetails;
  connectivity: DeviceConnectivityDetails;
  alerts: DeviceOrganisationAlert[];
  worstAlert: DeviceOrganisationAlert | null;

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
    this.description = params.description;
    this.imageId = params.imageId;
    this.tags = params.tags.slice();
    this.unrestricted = params.unrestricted;
    this.online = params.online;
    this.meta = { ...params.meta };
    this.modelStatuses = params.modelStatuses.map(dto => new ModelStatusInfos(dto));
    this.status = new DeviceStatusDetails(params.status);
    this.connectivity = new DeviceConnectivityDetails(params.connectivity);
    this.alerts = params.alerts.map(dto => new DeviceOrganisationAlert(dto));
    this.worstAlert = params.worstAlert != null ?
      new DeviceOrganisationAlert(params.worstAlert) : null;
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
  ownerId: string | null;
  ownerLabel: string | null;
  organisationId: string;
  managerId: string | null;
  managerName: string | null;
  locationId: string | null;
  locationLabel: string | null;
  locationAddress: string | null;
  groupId: string | null;
  groupLabel: string | null;
  groupIcon: string | null;
  label: string;
  code: string;
  description: string;
  imageId: string | null;
  tags: string[];
  unrestricted: boolean;
  online: number;
  meta: { [key: string]: string };
  modelStatuses: ModelStatusInfosDTO[];
  status: DeviceStatusDetailsDTO;
  connectivity: DeviceConnectivityDetailsDTO;
  alerts: DeviceOrganisationAlertDTO[];
  worstAlert: DeviceOrganisationAlertDTO | null;
}

export interface DeviceOrganisationFilters {
  locationId?: string | null;
  otherLocationId?: string | null;
  groupId?: string | null;
  otherGroupId?: string | null;
  root?: boolean | null;
  unrestricted?: boolean | null;
  modelsIds?: string[] | null;
  deviceOrganisationsIds?: string[] | null;
  otherDeviceOrganisationsIds?: string[] | null;
  search?: string | null;
}