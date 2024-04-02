import { onUnmounted, ref } from "vue";

import { ChangeDeviceOrganisationGroupDTO, ChangeDeviceOrganisationLocationDTO, CreateDeviceOrganisationDTO, DeviceOrganisationDetails, DeviceOrganisationDetailsDTO, DeviceOrganisationFilters, DeviceOrganisationInfos, DeviceOrganisationInfosDTO, UpdateDeviceOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, onEntityChanged , ServiceFactory } from "@dative-gpi/bones-ui";

import { DEVICE_ORGANISATIONS_URL, DEVICE_ORGANISATION_URL, DEVICE_ORGANISATION_GROUP_URL, DEVICE_ORGANISATION_LOCATION_URL } from "../../config/urls";

const DeviceOrganisationServiceFactory = new ServiceFactory<DeviceOrganisationDetailsDTO, DeviceOrganisationDetails>("deviceOrganisation", DeviceOrganisationDetails).create(factory => factory.build(
    factory.addGet(DEVICE_ORGANISATION_URL),
    factory.addGetMany<DeviceOrganisationInfosDTO, DeviceOrganisationInfos, DeviceOrganisationFilters>(DEVICE_ORGANISATIONS_URL, DeviceOrganisationInfos),
    factory.addCreate<CreateDeviceOrganisationDTO>(DEVICE_ORGANISATIONS_URL),
    factory.addUpdate<UpdateDeviceOrganisationDTO>(DEVICE_ORGANISATION_URL),
    factory.addRemove(DEVICE_ORGANISATION_URL),
    factory.addCustom("changeGroup", (axios, deviceOrganisationId: string, payload: ChangeDeviceOrganisationGroupDTO) => axios.put(DEVICE_ORGANISATION_GROUP_URL(deviceOrganisationId), payload)),
    factory.addCustom("changeLocation", (axios, deviceOrganisationId: string, payload: ChangeDeviceOrganisationLocationDTO) => axios.put(DEVICE_ORGANISATION_LOCATION_URL(deviceOrganisationId), payload)),
    factory.addNotify()
));

export const useDeviceOrganisation = ComposableFactory.get(DeviceOrganisationServiceFactory);
export const useDeviceOrganisations = ComposableFactory.getMany(DeviceOrganisationServiceFactory);
export const useCreateDeviceOrganisation = ComposableFactory.create(DeviceOrganisationServiceFactory);
export const useUpdateDeviceOrganisation = ComposableFactory.update(DeviceOrganisationServiceFactory);
export const useRemoveDeviceOrganisation = ComposableFactory.remove(DeviceOrganisationServiceFactory);
export const useChangeDeviceOrganisationGroup = ComposableFactory.custom(DeviceOrganisationServiceFactory, DeviceOrganisationServiceFactory.changeGroup);
export const useChangeDeviceOrganisationLocation = ComposableFactory.custom(DeviceOrganisationServiceFactory, DeviceOrganisationServiceFactory.changeLocation);