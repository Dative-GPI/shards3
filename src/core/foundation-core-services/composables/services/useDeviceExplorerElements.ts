import { ref } from "vue";

import { DeviceExplorerElementDetails, type DeviceExplorerElementDetailsDTO, type DeviceExplorerElementFilters, DeviceExplorerElementInfos, type DeviceExplorerElementInfosDTO, type DeviceOrganisationDetails, type GroupDetails } from "@dative-gpi/foundation-core-domain/models";
import { type AddOrUpdateCallback, type DeleteCallback, type NotifyEvent, onCollectionChanged } from "@dative-gpi/bones-ui";
import { fromDeviceOrganisation, fromGroup } from "@dative-gpi/foundation-shared-domain/tools";
import { alphanumericSort } from "@dative-gpi/foundation-shared-components/utils";
import { ServiceFactory } from "@dative-gpi/bones-ui/core";

import { DEVICE_EXPLORER_ELEMENTS_URL } from "../../config/urls";

import { useTrackDeviceConnectivity, useWatchDeviceConnectivity } from "./useDeviceConnectivities";
import { useTrackDeviceStatuses, useWatchDeviceStatuses } from "./useDeviceStatuses";
import { useSubscribeToDeviceOrganisations } from "./useDeviceOrganisations";
import { useSubscribeToGroups } from "./useGroups";

const DeviceExplorerElementServiceFactory = new ServiceFactory<DeviceExplorerElementDetailsDTO, DeviceExplorerElementDetails>("deviceExplorerElement", DeviceExplorerElementDetails).create(factory => factory.build(
  factory.addGetMany<DeviceExplorerElementInfosDTO, DeviceExplorerElementInfos, DeviceExplorerElementFilters>(DEVICE_EXPLORER_ELEMENTS_URL, DeviceExplorerElementInfos),
  factory.addNotify()
));

export const useDeviceExplorerElements = () => {
  const { watchMany: watchDevicesConnectivity } = useWatchDeviceConnectivity();
  const { watchMany: watchDevicesStatuses } = useWatchDeviceStatuses();

  const { track: trackDeviceConnectivity } = useTrackDeviceConnectivity();
  const { track: trackDeviceStatuses } = useTrackDeviceStatuses();

  const { subscribe: subscribeToDeviceOrganisations } = useSubscribeToDeviceOrganisations();
  const { subscribe: subscribeToGroups } = useSubscribeToGroups();

  const fetching = ref(false);
  const entities = ref<DeviceExplorerElementInfos[]>([]);
  const filters = ref<DeviceExplorerElementFilters>();

  const getMany = async (filter?: DeviceExplorerElementFilters) => {
    fetching.value = true;
    filters.value = filter;

    const filterMethod = (el: DeviceExplorerElementInfos): boolean => {
      if (!filters.value) {
        return true;
      }
      if (!filters.value.search) {
        return (filters.value.root && !el.parentId) || (!!filters.value.parentId && filters.value.parentId == el.parentId);
      }
    
      const fullText = `${el.label} ${el.code} ${el.tags.join(" ")}`;
      return (!filters.value.parentId || el.path.some(p => p.id === filters.value!.parentId)) &&
        (fullText.toLowerCase().includes(filters.value.search.toLowerCase()));
    };

    const sortMethod = (): void => {
      entities.value = entities.value.sort((a, b) => {
        if (a.type === b.type) {
          return alphanumericSort(a.label, b.label);
        }
        return a.type - b.type;
      });
    };

    const onCollectionChangedCustom = onCollectionChanged(entities, filterMethod);

    try {
      entities.value = await DeviceExplorerElementServiceFactory.getMany(filters.value);

      subscribeToDeviceOrganisations("all", (ev: NotifyEvent, el: DeviceOrganisationDetails | any) => {
        switch(ev) {
          case "add":
          case "update":
            (onCollectionChangedCustom as AddOrUpdateCallback<DeviceExplorerElementInfos>)(ev, fromDeviceOrganisation(el));
            break;
          case "delete":
            (onCollectionChangedCustom as DeleteCallback)(ev, el);
            break;
        }
        sortMethod();
      });

      subscribeToGroups("all", (ev: NotifyEvent, el: GroupDetails | any) => {
        switch(ev) {
          case "add":
          case "update":
            (onCollectionChangedCustom as AddOrUpdateCallback<DeviceExplorerElementInfos>)(ev, fromGroup(el));
            break;
          case "delete":
            (onCollectionChangedCustom as DeleteCallback)(ev, el);
            break;
        }
        sortMethod();
      });

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