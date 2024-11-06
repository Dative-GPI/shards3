import { type DeviceExplorerElementInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { DeviceExplorerElementType } from "@dative-gpi/foundation-shared-domain/enums";

import { DEVICEORGANISATIONS } from "./deviceOrganisations.mock";
import { GROUPS } from "./groups.mock";

export const DEVICEEXPLORERELEMENTS: DeviceExplorerElementInfosDTO[] = GROUPS.slice(0, 5).map(g => ({
    ...g,
    type: DeviceExplorerElementType.Group,
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
} as DeviceExplorerElementInfosDTO)).concat(DEVICEORGANISATIONS.map(d => ({
    ...d,
    type: DeviceExplorerElementType.DeviceOrganisation,
    parentId: d.groupId,
    icon: null,
    groupsIds: null,
    deviceOrganisationsIds: null,
    modelsIds: null,
    recursiveGroupsIds: null,
    recursiveDeviceOrganisationsIds: null,
    recursiveModelsIds: null
} as DeviceExplorerElementInfosDTO)));