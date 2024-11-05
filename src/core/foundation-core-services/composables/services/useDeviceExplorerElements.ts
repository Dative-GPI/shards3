import { ref } from "vue";

import { DeviceExplorerElementDetails, type DeviceExplorerElementDetailsDTO, type DeviceExplorerElementFilters, DeviceExplorerElementInfos, type DeviceExplorerElementInfosDTO, type DeviceOrganisationDetails, type GroupDetails } from "@dative-gpi/foundation-core-domain/models";
import { filterDeviceOrganisation, filterGroup, fromDeviceOrganisation, fromGroup } from "@dative-gpi/foundation-shared-domain/tools";
import { type AllEvent, onCollectionChanged } from "@dative-gpi/bones-ui";
import { ServiceFactory } from "@dative-gpi/bones-ui/core";

import { DEVICE_EXPLORER_ELEMENTS_URL } from "../../config/urls";

import { useTrackDeviceConnectivity, useWatchDeviceConnectivity } from "./useDeviceConnectivities";
import { useTrackDeviceStatuses, useWatchDeviceStatuses } from "./useDeviceStatuses";
import { subscribeToDeviceOrganisations } from "./useDeviceOrganisations";
import { subscribeToGroups } from "./useGroups";

const DeviceExplorerElementServiceFactory = new ServiceFactory<DeviceExplorerElementDetailsDTO, DeviceExplorerElementDetails>("deviceExplorerElement", DeviceExplorerElementDetails).create(factory => factory.build(
  factory.addGetMany<DeviceExplorerElementInfosDTO, DeviceExplorerElementInfos, DeviceExplorerElementFilters>(DEVICE_EXPLORER_ELEMENTS_URL, DeviceExplorerElementInfos),
  factory.addNotify()
));

export const useDeviceExplorerElements = () => {
  const { watchMany: watchDevicesConnectivity } = useWatchDeviceConnectivity();
  const { watchMany: watchDevicesStatuses } = useWatchDeviceStatuses();

  const { track: trackDeviceConnectivity } = useTrackDeviceConnectivity();
  const { track: trackDeviceStatuses } = useTrackDeviceStatuses();

  const fetching = ref(false);
  const entities = ref<DeviceExplorerElementInfos[]>([]);
  const filters = ref<DeviceExplorerElementFilters | null>(null);

  subscribeToDeviceOrganisations((ev: AllEvent, el: DeviceOrganisationDetails) => {
    const changeHandler = onCollectionChanged(entities, () => filterDeviceOrganisation(el, filters.value));
    changeHandler(ev as never, fromDeviceOrganisation(el));
  });

  subscribeToGroups((ev: AllEvent, el: GroupDetails) => {
    const changeHandler = onCollectionChanged(entities, () => filterGroup(el, filters.value));
    changeHandler(ev as never, fromGroup(el));
  });

  const getMany = async (...args: Parameters<typeof DeviceExplorerElementServiceFactory.getMany>) => {
    fetching.value = true;
    filters.value = args.pop() ?? null;

    try {
      entities.value = await DeviceExplorerElementServiceFactory.getMany(...args);

      watchDevicesStatuses();
      watchDevicesConnectivity();

      for (const deviceExplorerElement of entities.value) {
        trackDeviceStatuses(deviceExplorerElement.status!, s => deviceExplorerElement.status = s);
        trackDeviceConnectivity(deviceExplorerElement.connectivity!, c => deviceExplorerElement.connectivity = c);
      }
    }
    finally {
      fetching.value = false;
    }
  }

  return {
    fetching,
    getMany,
    entities
  }
};