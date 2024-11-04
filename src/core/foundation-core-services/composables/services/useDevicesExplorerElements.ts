import { type Ref } from "vue";

import { DevicesExplorerElementDetails, type DevicesExplorerElementDetailsDTO, type DevicesExplorerElementFilters, DevicesExplorerElementInfos, type DevicesExplorerElementInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { DEVICES_EXPLORER_ELEMENTS_URL } from "../../config/urls";

import { useTrackDeviceConnectivity, useWatchDeviceConnectivity } from "./useDeviceConnectivities";
import { useTrackDeviceStatuses, useWatchDeviceStatuses } from "./useDeviceStatuses";

const DevicesExplorerElementServiceFactory = new ServiceFactory<DevicesExplorerElementDetailsDTO, DevicesExplorerElementDetails>("devicesExplorerElement", DevicesExplorerElementDetails).create(factory => factory.build(
  factory.addGetMany<DevicesExplorerElementInfosDTO, DevicesExplorerElementInfos, DevicesExplorerElementFilters>(DEVICES_EXPLORER_ELEMENTS_URL, DevicesExplorerElementInfos),
  factory.addNotify()
));

const trackDevicesExplorerElements = () => {
  const { track: trackDeviceStatuses } = useTrackDeviceStatuses();
  const { track: trackDeviceConnectivity } = useTrackDeviceConnectivity();

  const { watchMany: watchDevicesStatuses } = useWatchDeviceStatuses();
  const { watchMany: watchDevicesConnectivity } = useWatchDeviceConnectivity();

  return (devicesExplorerElements: Ref<DevicesExplorerElementInfos[]>) => {
    watchDevicesStatuses();
    watchDevicesConnectivity();

    for (const devicesExplorerElement of devicesExplorerElements.value) {
      trackDeviceStatuses(devicesExplorerElement.status, s => devicesExplorerElement.status = s);
      trackDeviceConnectivity(devicesExplorerElement.connectivity, c => devicesExplorerElement.connectivity = c);
    }
  }
}

export const useDevicesExplorerElements = ComposableFactory.getMany(DevicesExplorerElementServiceFactory, trackDevicesExplorerElements);