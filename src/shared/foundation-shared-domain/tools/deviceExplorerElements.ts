import { type DeviceExplorerElementInfos, type DeviceOrganisationInfos, type GroupInfos } from "@dative-gpi/foundation-core-domain/models";

import { DeviceExplorerElementType } from "../enums";

export const fromDeviceOrganisation = (deviceOrganisation: DeviceOrganisationInfos): DeviceExplorerElementInfos => ({
  ...deviceOrganisation,
  type: DeviceExplorerElementType.DeviceOrganisation,
  parentId: deviceOrganisation.groupId,
  connectable: deviceOrganisation.connectivity,
  icon: null,
  groupsIds: null,
  deviceOrganisationsIds: null,
  modelsIds: null,
  recursiveGroupsIds: null,
  recursiveDeviceOrganisationsIds: null,
  recursiveModelsIds: null
});

export const fromGroup = (group: GroupInfos): DeviceExplorerElementInfos => ({
  ...group,
  type: DeviceExplorerElementType.Group,
  connectable: null,
  manufacturerLabel: null,
  articleLabel:  null,
  modelLabel: null,
  ownerLabel: null,
  managerName: null,
  unrestricted: null,
  online: null,
  meta: null,
  modelStatuses: null,
  status: null,
  connectivity: null,
  alerts: null,
  worstAlert: null
});