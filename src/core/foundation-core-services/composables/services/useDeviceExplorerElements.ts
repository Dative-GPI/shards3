import { ref, type Ref } from "vue";

import { DeviceExplorerElementDetails, type DeviceExplorerElementDetailsDTO, type DeviceExplorerElementFilters, DeviceExplorerElementInfos, type DeviceExplorerElementInfosDTO, type DeviceOrganisationDetails, type GroupDetails } from "@dative-gpi/foundation-core-domain/models";
import { filterDeviceOrganisation, filterGroup, fromDeviceOrganisation, fromGroup } from "@dative-gpi/foundation-shared-domain/tools";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { type AllEvent, buildURL } from "@dative-gpi/bones-ui";

import { DEVICE_EXPLORER_ELEMENTS_URL } from "../../config/urls";

import { useTrackDeviceConnectivity, useWatchDeviceConnectivity } from "./useDeviceConnectivities";
import { useTrackDeviceStatuses, useWatchDeviceStatuses } from "./useDeviceStatuses";
import { subscribeToDeviceOrganisations } from "./useDeviceOrganisations";
import { subscribeToGroups } from "./useGroups";

const getManyFilters: Ref<DeviceExplorerElementFilters | null> = ref(null);

const DeviceExplorerElementServiceFactory = new ServiceFactory<DeviceExplorerElementDetailsDTO, DeviceExplorerElementDetails>("deviceExplorerElement", DeviceExplorerElementDetails).create(factory => factory.build(
  factory.addGetMany<DeviceExplorerElementInfosDTO, DeviceExplorerElementInfos, DeviceExplorerElementFilters>(DEVICE_EXPLORER_ELEMENTS_URL, DeviceExplorerElementInfos),
  factory.addNotify(() => ({
    ...ServiceFactory.addCustom("getMany", (axios, filters: DeviceExplorerElementFilters) => {
      getManyFilters.value = filters
      return axios.get(buildURL(DEVICE_EXPLORER_ELEMENTS_URL(), filters))
    }, (dtos: DeviceExplorerElementInfosDTO[]) => {
      const result = dtos.map(dto => new DeviceExplorerElementInfos(dto));

      subscribeToDeviceOrganisations((ev: AllEvent, el: DeviceOrganisationDetails) => {
        const index = result.findIndex(e => e.id === el.id);
        const shouldAct = filterDeviceOrganisation(el, getManyFilters.value);

        switch (ev) {
          case "add":
          case "update":
            if (index === -1 && shouldAct) {
              result.push(fromDeviceOrganisation(el));
            }
            else if (index !== -1 && shouldAct) {
              result.splice(index, 1, fromDeviceOrganisation(el));
            }
            else if (index !== -1 && !shouldAct) {
              result.splice(index, 1);
            }
            break;
          case "delete":
            if (index !== -1) {
              result.splice(index, 1);
            }
            break;
        }
      });

      subscribeToGroups((ev: AllEvent, el: GroupDetails) => {
        const index = result.findIndex(e => e.id === el.id);
        const shouldAct = filterGroup(el, getManyFilters.value);

        switch (ev) {
          case "add":
          case "update":
            if (index === -1 && shouldAct) {
              result.push(fromGroup(el));
            }
            else if (index !== -1 && shouldAct) {
              result.splice(index, 1, fromGroup(el));
            }
            else if (index !== -1 && !shouldAct) {
              result.splice(index, 1);
            }
            break;
          case "delete":
            if (index !== -1) {
              result.splice(index, 1);
            }
            break;
        }
      });

      return result;
    })
  }))
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
      trackDeviceStatuses(deviceExplorerElement.status!, s => deviceExplorerElement.status = s);
      trackDeviceConnectivity(deviceExplorerElement.connectivity!, c => deviceExplorerElement.connectivity = c);
    }
  }
}

export const useDeviceExplorerElements = ComposableFactory.getMany(DeviceExplorerElementServiceFactory, trackDeviceExplorerElements);