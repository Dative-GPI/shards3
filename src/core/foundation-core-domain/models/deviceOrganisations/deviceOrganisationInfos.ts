import { DeviceConnectivityDetails, type DeviceConnectivityDetailsDTO } from "../deviceConnectivities/deviceConnectivityDetails";
import { DeviceStatusDetails, type DeviceStatusDetailsDTO } from "../deviceStatuses/deviceStatusDetails";
import { DeviceOrganisationAlert, type DeviceOrganisationAlertDTO } from "./deviceOrganisationAlert";
import { ModelStatusInfos, type ModelStatusInfosDTO } from "../modelStatuses/modelStatusInfos";
import { PathCrumb, type PathCrumbDTO } from "../shared/pathCrumb";

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
  path: PathCrumb[];
  meta: { [key: string]: string };
  modelStatuses: ModelStatusInfos[];
  status: DeviceStatusDetails;
  connectivity: DeviceConnectivityDetails;
  alerts: DeviceOrganisationAlert[];
  worstAlert: DeviceOrganisationAlert | null;

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
    this.path = params.path.map(dto => new PathCrumb({ ...dto })).sort((a, b) => b.index - a.index);
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
  path: PathCrumbDTO[];
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