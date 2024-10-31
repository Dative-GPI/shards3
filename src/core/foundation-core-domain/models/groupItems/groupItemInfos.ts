import { DeviceConnectivityDetails, type DeviceConnectivityDetailsDTO } from "../deviceConnectivities/deviceConnectivityDetails";
import { DeviceOrganisationAlert, type DeviceOrganisationAlertDTO } from "../deviceOrganisations/deviceOrganisationAlert";
import { DeviceStatusDetails, type DeviceStatusDetailsDTO } from "../deviceStatuses/deviceStatusDetails";
import { ModelStatusInfos, type ModelStatusInfosDTO } from "../modelStatuses/modelStatusInfos";
import { PathCrumb, type PathCrumbDTO } from "../shared/pathCrumb";

export class GroupItemInfos {
  id: string;
  organisationId: string;
  parentId: string | null;
  imageId: string | null;
  code: string;
  label: string;
  tags: string[];
  path: PathCrumb[];

  icon: string;
  groupsIds: string[];
  deviceOrganisationsIds: string[];
  modelsIds: string[];
  recursiveGroupsIds: string[];
  recursiveDeviceOrganisationsIds: string[];
  recursiveModelsIds: string[];

  manufacturerLabel: string;
  articleLabel: string;
  modelLabel: string;
  ownerLabel: string | null;
  managerName: string | null;
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

  constructor(params: GroupItemInfosDTO) {
    this.id = params.id;
    this.organisationId = params.organisationId;
    this.parentId = params.parentId;
    this.imageId = params.imageId;
    this.code = params.code;
    this.label = params.label;
    this.tags = params.tags;
    this.path = params.path.map(dto => new PathCrumb({ ...dto })).sort((a, b) => b.index - a.index);

    this.icon = params.icon;
    this.groupsIds = params.groupsIds.slice();
    this.deviceOrganisationsIds = params.deviceOrganisationsIds.slice();
    this.modelsIds = params.modelsIds.slice();
    this.recursiveGroupsIds = params.recursiveGroupsIds.slice();
    this.recursiveDeviceOrganisationsIds = params.recursiveDeviceOrganisationsIds.slice();
    this.recursiveModelsIds = params.recursiveModelsIds.slice();

    this.manufacturerLabel = params.manufacturerLabel;
    this.articleLabel = params.articleLabel;
    this.modelLabel = params.modelLabel;
    this.ownerLabel = params.ownerLabel;
    this.managerName = params.managerName;
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

export interface GroupItemInfosDTO {
  id: string;
  organisationId: string;
  parentId: string | null;
  imageId: string | null;
  code: string;
  label: string;
  tags: string[];
  path: PathCrumbDTO[];

  icon: string;
  groupsIds: string[];
  deviceOrganisationsIds: string[];
  modelsIds: string[];
  recursiveGroupsIds: string[];
  recursiveDeviceOrganisationsIds: string[];
  recursiveModelsIds: string[];

  manufacturerLabel: string;
  articleLabel: string;
  modelLabel: string;
  ownerLabel: string | null;
  managerName: string | null;
  unrestricted: boolean;
  online: number;
  meta: { [key: string]: string };
  modelStatuses: ModelStatusInfosDTO[];
  status: DeviceStatusDetailsDTO;
  connectivity: DeviceConnectivityDetailsDTO;
  alerts: DeviceOrganisationAlertDTO[];
  worstAlert: DeviceOrganisationAlertDTO | null;
}

export interface GroupItemFilters {
  parentId?: string | null;
  root?: boolean | null;
  search?: string | null;
}