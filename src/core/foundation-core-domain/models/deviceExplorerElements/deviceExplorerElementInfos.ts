import { type DeviceExplorerElementType } from "@dative-gpi/foundation-shared-domain/enums";

import { DeviceConnectivityDetails, type DeviceConnectivityDetailsDTO } from "../deviceConnectivities/deviceConnectivityDetails";
import { DeviceOrganisationAlert, type DeviceOrganisationAlertDTO } from "../deviceOrganisations/deviceOrganisationAlert";
import { DeviceStatusDetails, type DeviceStatusDetailsDTO } from "../deviceStatuses/deviceStatusDetails";
import { ModelStatusInfos, type ModelStatusInfosDTO } from "../modelStatuses/modelStatusInfos";
import { PathCrumb, type PathCrumbDTO } from "../shared/pathCrumb";

export class DeviceExplorerElementInfos {
  id: string;
  organisationId: string | null;
  parentId: string | null;
  imageId: string | null;
  code: string;
  label: string;
  tags: string[];
  path: PathCrumb[];
  type: DeviceExplorerElementType;

  icon: string | null;
  groupsIds: string[] | null;
  deviceOrganisationsIds: string[] | null;
  modelsIds: string[] | null;
  recursiveGroupsIds: string[] | null;
  recursiveDeviceOrganisationsIds: string[] | null;
  recursiveModelsIds: string[] | null;

  manufacturerLabel: string | null;
  articleLabel: string | null;
  modelLabel: string | null;
  ownerLabel: string | null;
  managerName: string | null;
  unrestricted: boolean | null;
  online: number | null;
  meta: { [key: string]: string } | null;
  modelStatuses: ModelStatusInfos[] | null;
  status: DeviceStatusDetails | null;
  connectivity: DeviceConnectivityDetails | null;
  alerts: DeviceOrganisationAlert[] | null;
  worstAlert: DeviceOrganisationAlert | null;

  constructor(params: DeviceExplorerElementInfosDTO) {
    this.id = params.id;
    this.organisationId = params.organisationId;
    this.parentId = params.parentId;
    this.imageId = params.imageId;
    this.code = params.code;
    this.label = params.label;
    this.tags = params.tags;
    this.path = params.path.map(dto => new PathCrumb({ ...dto })).sort((a, b) => b.index - a.index);
    this.type = params.type;

    this.icon = params.icon ?? null;
    this.groupsIds = params.groupsIds?.slice() ?? null;
    this.deviceOrganisationsIds = params.deviceOrganisationsIds?.slice() ?? null;
    this.modelsIds = params.modelsIds?.slice() ?? null;
    this.recursiveGroupsIds = params.recursiveGroupsIds?.slice() ?? null;
    this.recursiveDeviceOrganisationsIds = params.recursiveDeviceOrganisationsIds?.slice() ?? null;
    this.recursiveModelsIds = params.recursiveModelsIds?.slice() ?? null;

    this.manufacturerLabel = params.manufacturerLabel ?? null;
    this.articleLabel = params.articleLabel ?? null;
    this.modelLabel = params.modelLabel ?? null;
    this.ownerLabel = params.ownerLabel ?? null;
    this.managerName = params.managerName ?? null;
    this.unrestricted = params.unrestricted ?? null;
    this.online = params.online ?? null;
    this.meta = params.meta ? { ...params.meta } : null;
    this.modelStatuses = params.modelStatuses?.map(dto => new ModelStatusInfos(dto)) ?? null;
    this.status = params.status ? new DeviceStatusDetails(params.status) : null;
    this.connectivity = params.connectivity ? new DeviceConnectivityDetails(params.connectivity) : null;
    this.alerts = params.alerts?.map(dto => new DeviceOrganisationAlert(dto)) ?? null;
    this.worstAlert = params.worstAlert ? new DeviceOrganisationAlert(params.worstAlert) : null;
  }
}

export interface DeviceExplorerElementInfosDTO {
  id: string;
  organisationId: string | null;
  parentId: string | null;
  imageId: string | null;
  code: string;
  label: string;
  tags: string[];
  path: PathCrumbDTO[];
  type: number;

  icon?: string | null;
  groupsIds?: string[] | null;
  deviceOrganisationsIds?: string[] | null;
  modelsIds?: string[] | null;
  recursiveGroupsIds?: string[] | null;
  recursiveDeviceOrganisationsIds?: string[] | null;
  recursiveModelsIds?: string[] | null;

  manufacturerLabel?: string | null;
  articleLabel?: string | null;
  modelLabel?: string | null;
  ownerLabel?: string | null;
  managerName?: string | null;
  unrestricted?: boolean | null;
  online?: number | null;
  meta?: { [key: string]: string } | null;
  modelStatuses?: ModelStatusInfosDTO[] | null;
  status?: DeviceStatusDetailsDTO | null;
  connectivity?: DeviceConnectivityDetailsDTO | null;
  alerts?: DeviceOrganisationAlertDTO[] | null;
  worstAlert?: DeviceOrganisationAlertDTO | null;
}

export interface DeviceExplorerElementFilters {
  parentId?: string | null;
  root?: boolean | null;
  search?: string | null;
}