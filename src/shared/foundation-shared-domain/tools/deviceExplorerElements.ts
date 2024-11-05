import { type DeviceExplorerElementFilters, type DeviceExplorerElementInfos, type DeviceOrganisationInfos, type GroupInfos } from "@dative-gpi/foundation-core-domain/models";

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

export const filterDeviceOrganisation = (deviceOrganisation: DeviceOrganisationInfos, filters: DeviceExplorerElementFilters | null): boolean => {
  if (!filters) {
    return true;
  }
  if (!filters.search) {
    return (filters.root && !deviceOrganisation.groupId) || (!!filters.parentId && filters.parentId == deviceOrganisation.groupId);
  }

  const fullText = `${deviceOrganisation.label} ${deviceOrganisation.code} ${deviceOrganisation.description} ${deviceOrganisation.tags.join(" ")}`;
  return (!filters.parentId || deviceOrganisation.path.some(p => p.id === filters.parentId)) &&
    (fullText.toLowerCase().includes(filters.search.toLowerCase()));
};

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

export const filterGroup = (group: GroupInfos, filters: DeviceExplorerElementFilters | null): boolean => {
  if (!filters) {
    return true;
  }
  if (!filters.search) {
    return (filters.root && !group.parentId) || (!!filters.parentId && filters.parentId == group.parentId);
  }

  const fullText = `${group.label} ${group.code} ${group.tags.join(" ")}`;
  return (!filters.parentId || group.path.some(p => p.id === filters.parentId)) && 
    (fullText.toLowerCase().includes(filters.search.toLowerCase()));
};