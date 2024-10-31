import { type Ref } from "vue";

import { GroupItemDetails, type GroupItemDetailsDTO, type GroupItemFilters, GroupItemInfos, type GroupItemInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { GROUP_ITEMS_URL } from "../../config/urls";

import { useTrackDeviceConnectivity, useWatchDeviceConnectivity } from "./useDeviceConnectivities";
import { useTrackDeviceStatuses, useWatchDeviceStatuses } from "./useDeviceStatuses";

const GroupItemServiceFactory = new ServiceFactory<GroupItemDetailsDTO, GroupItemDetails>("groupItem", GroupItemDetails).create(factory => factory.build(
  factory.addGetMany<GroupItemInfosDTO, GroupItemInfos, GroupItemFilters>(GROUP_ITEMS_URL, GroupItemInfos),
  factory.addNotify()
));

const trackGroupItems = () => {
  const { track: trackDeviceStatuses } = useTrackDeviceStatuses();
  const { track: trackDeviceConnectivity } = useTrackDeviceConnectivity();

  const { watchMany: watchDevicesStatuses } = useWatchDeviceStatuses();
  const { watchMany: watchDevicesConnectivity } = useWatchDeviceConnectivity();

  return (groupItems: Ref<GroupItemInfos[]>) => {
    watchDevicesStatuses();
    watchDevicesConnectivity();

    for (const groupItem of groupItems.value) {
      trackDeviceStatuses(groupItem.status, s => groupItem.status = s);
      trackDeviceConnectivity(groupItem.connectivity, c => groupItem.connectivity = c);
    }
  }
}

export const useGroupItems = ComposableFactory.getMany(GroupItemServiceFactory, trackGroupItems);