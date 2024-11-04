import { type Ref } from "vue";

import { DeviceExplorerElementDetails, type DeviceExplorerElementDetailsDTO, type DeviceExplorerElementFilters, DeviceExplorerElementInfos, type DeviceExplorerElementInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { DEVICE_EXPLORER_ELEMENTS_URL } from "../../config/urls";

import { useTrackDeviceConnectivity, useWatchDeviceConnectivity } from "./useDeviceConnectivities";
import { useTrackDeviceStatuses, useWatchDeviceStatuses } from "./useDeviceStatuses";

const DeviceExplorerElementServiceFactory = new ServiceFactory<DeviceExplorerElementDetailsDTO, DeviceExplorerElementDetails>("deviceExplorerElement", DeviceExplorerElementDetails).create(factory => factory.build(
  factory.addGetMany<DeviceExplorerElementInfosDTO, DeviceExplorerElementInfos, DeviceExplorerElementFilters>(DEVICE_EXPLORER_ELEMENTS_URL, DeviceExplorerElementInfos),
  factory.addNotify()
));

const trackDeviceExplorerElements = () => {
  const { track: trackDeviceStatuses } = useTrackDeviceStatuses();
  const { track: trackDeviceConnectivity } = useTrackDeviceConnectivity();

  const { watchMany: watchDevicesStatuses } = useWatchDeviceStatuses();
  const { watchMany: watchDevicesConnectivity } = useWatchDeviceConnectivity();

  return (deviceExplorerElements: Ref<DeviceExplorerElementInfos[]>) => {
    watchDevicesStatuses();
    watchDevicesConnectivity();

    for (const deviceExplorerElement of deviceExplorerElements.value) {
      trackDeviceStatuses(deviceExplorerElement.status, s => deviceExplorerElement.status = s);
      trackDeviceConnectivity(deviceExplorerElement.connectivity, c => deviceExplorerElement.connectivity = c);
    }
  }
}

export const useDeviceExplorerElements = ComposableFactory.getMany(DeviceExplorerElementServiceFactory, trackDeviceExplorerElements);