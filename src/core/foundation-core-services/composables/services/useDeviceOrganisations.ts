import { Ref } from "vue";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { ChangeDeviceOrganisationGroupDTO, ChangeDeviceOrganisationLocationDTO, CreateDeviceOrganisationDTO, DeviceOrganisationDetails, DeviceOrganisationDetailsDTO, DeviceOrganisationFilters, DeviceOrganisationInfos, DeviceOrganisationInfosDTO, UpdateDeviceOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";

import { DEVICE_ORGANISATIONS_URL, DEVICE_ORGANISATION_URL, DEVICE_ORGANISATION_GROUP_URL, DEVICE_ORGANISATION_LOCATION_URL } from "../../config/urls";

import { useTrackDeviceConnectivity, useWatchDeviceConnectivity } from "./useDeviceConnectivities";
import { useTrackDeviceStatuses, useWatchDeviceStatuses } from "./useDeviceStatuses";

const DeviceOrganisationServiceFactory = new ServiceFactory<DeviceOrganisationDetailsDTO, DeviceOrganisationDetails>("deviceOrganisation", DeviceOrganisationDetails)
  .create(factory => factory.build(
    factory.addGet(DEVICE_ORGANISATION_URL),
    factory.addGetMany<DeviceOrganisationInfosDTO, DeviceOrganisationInfos, DeviceOrganisationFilters>(DEVICE_ORGANISATIONS_URL, DeviceOrganisationInfos),
    factory.addCreate<CreateDeviceOrganisationDTO>(DEVICE_ORGANISATIONS_URL),
    factory.addUpdate<UpdateDeviceOrganisationDTO>(DEVICE_ORGANISATION_URL),
    factory.addRemove(DEVICE_ORGANISATION_URL),
    factory.addNotify(notifyService => ({
      ...ServiceFactory.addCustom("changeGroup", (axios, deviceOrganisationId: string, payload: ChangeDeviceOrganisationGroupDTO) => axios.put(DEVICE_ORGANISATION_GROUP_URL(deviceOrganisationId), payload), (dto: DeviceOrganisationDetailsDTO) => {
        const result = new DeviceOrganisationDetails(dto);
        notifyService.notify("update", result);
        return result;
      }),
      ...ServiceFactory.addCustom("changeLocation", (axios, deviceOrganisationId: string, payload: ChangeDeviceOrganisationLocationDTO) => axios.put(DEVICE_ORGANISATION_LOCATION_URL(deviceOrganisationId), payload), (dto: DeviceOrganisationDetailsDTO) => {
        const result = new DeviceOrganisationDetails(dto);
        notifyService.notify("update", result);
        return result;
      })
    }))
  ));

const trackDeviceOrganisation = () => {
  const { track: trackDeviceStatuses } = useTrackDeviceStatuses();
  const { track: trackDeviceConnectivity } = useTrackDeviceConnectivity();

  const { watchOne: watchDeviceStatuses } = useWatchDeviceStatuses();
  const { watchOne: watchDeviceConnectivity } = useWatchDeviceConnectivity();

  return (deviceOrganisation: Ref<DeviceOrganisationDetails>) => {
    watchDeviceStatuses(deviceOrganisation.value.status.id);
    watchDeviceConnectivity(deviceOrganisation.value.connectivity.id);

    trackDeviceStatuses(deviceOrganisation.value.status, s => deviceOrganisation.value.status = s);
    trackDeviceConnectivity(deviceOrganisation.value.connectivity, c => deviceOrganisation.value.connectivity = c);
  }
};

const trackDeviceOrganisations = () => {
  const { track: trackDeviceStatuses } = useTrackDeviceStatuses();
  const { track: trackDeviceConnectivity } = useTrackDeviceConnectivity();

  const { watchMany: watchDevicesStatuses } = useWatchDeviceStatuses();
  const { watchMany: watchDevicesConnectivity } = useWatchDeviceConnectivity();

  return (deviceOrganisations: Ref<DeviceOrganisationInfos[]>) => {
    watchDevicesStatuses();
    watchDevicesConnectivity();

    for (const deviceOrganisation of deviceOrganisations.value) {
      trackDeviceStatuses(deviceOrganisation.status, s => deviceOrganisation.status = s);
      trackDeviceConnectivity(deviceOrganisation.connectivity, c => deviceOrganisation.connectivity = c);
    }
  }
}

export const useDeviceOrganisation = ComposableFactory.get(DeviceOrganisationServiceFactory, trackDeviceOrganisation);
export const useDeviceOrganisations = ComposableFactory.getMany(DeviceOrganisationServiceFactory, trackDeviceOrganisations);
export const useCreateDeviceOrganisation = ComposableFactory.create(DeviceOrganisationServiceFactory, trackDeviceOrganisation);
export const useUpdateDeviceOrganisation = ComposableFactory.update(DeviceOrganisationServiceFactory, trackDeviceOrganisation);

export const useRemoveDeviceOrganisation = ComposableFactory.remove(DeviceOrganisationServiceFactory);

export const useChangeDeviceOrganisationGroup = ComposableFactory.custom(DeviceOrganisationServiceFactory.changeGroup, trackDeviceOrganisation);
export const useChangeDeviceOrganisationLocation = ComposableFactory.custom(DeviceOrganisationServiceFactory.changeLocation, trackDeviceOrganisation);
