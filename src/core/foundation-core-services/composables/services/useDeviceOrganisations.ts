import { Ref, onUnmounted, readonly, ref } from "vue";

import { ChangeDeviceOrganisationGroupDTO, ChangeDeviceOrganisationLocationDTO, CreateDeviceOrganisationDTO, DeviceOrganisationDetails, DeviceOrganisationDetailsDTO, DeviceOrganisationFilters, DeviceOrganisationInfos, DeviceOrganisationInfosDTO, UpdateDeviceOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, onEntityChanged , ServiceFactory } from "@dative-gpi/bones-ui";

import { DEVICE_ORGANISATIONS_URL, DEVICE_ORGANISATION_URL, DEVICE_ORGANISATION_GROUP_URL, DEVICE_ORGANISATION_LOCATION_URL } from "../../config/urls";

const DeviceOrganisationServiceFactory = new ServiceFactory<DeviceOrganisationDetailsDTO, DeviceOrganisationDetails>("deviceOrganisation", DeviceOrganisationDetails).create(factory => factory.build(
    factory.addGet(DEVICE_ORGANISATION_URL),
    factory.addGetMany<DeviceOrganisationInfosDTO, DeviceOrganisationInfos, DeviceOrganisationFilters>(DEVICE_ORGANISATIONS_URL, DeviceOrganisationInfos),
    factory.addCreate<CreateDeviceOrganisationDTO>(DEVICE_ORGANISATIONS_URL),
    factory.addUpdate<UpdateDeviceOrganisationDTO>(DEVICE_ORGANISATION_URL),
    factory.addRemove(DEVICE_ORGANISATION_URL),
    factory.addNotify((notifyService) => ({
        changeGroup: async (deviceOrganisationId: string, payload: ChangeDeviceOrganisationGroupDTO): Promise<DeviceOrganisationDetails> => {
            const response = await ServiceFactory.http.put(DEVICE_ORGANISATION_GROUP_URL(deviceOrganisationId), payload);
            const result = new DeviceOrganisationDetails(response.data);

            notifyService.notify("update", result);

            return result;
        },
        changeLocation: async (deviceOrganisationId: string, payload: ChangeDeviceOrganisationLocationDTO): Promise<DeviceOrganisationDetails> => {
            const response = await ServiceFactory.http.put(DEVICE_ORGANISATION_LOCATION_URL(deviceOrganisationId), payload);
            const result = new DeviceOrganisationDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useDeviceOrganisation = ComposableFactory.get(DeviceOrganisationServiceFactory);
export const useDeviceOrganisations = ComposableFactory.getMany(DeviceOrganisationServiceFactory);
export const useCreateDeviceOrganisation = ComposableFactory.create(DeviceOrganisationServiceFactory);
export const useUpdateDeviceOrganisation = ComposableFactory.update(DeviceOrganisationServiceFactory);
export const useRemoveDeviceOrganisation = ComposableFactory.remove(DeviceOrganisationServiceFactory);
export const useChangeDeviceOrganisationGroup = () => {
    const service = DeviceOrganisationServiceFactory();
    const subscriberIds: number[] = [];

    const changing = ref(false);
    const changed = ref<DeviceOrganisationDetails | null>(null) as Ref<DeviceOrganisationDetails | null>;

    onUnmounted(() => {
        subscriberIds.forEach(id => service.unsubscribe(id));
        subscriberIds.length = 0;
    });

    const change = async (deviceOrganisationId: string, payload: ChangeDeviceOrganisationGroupDTO) => {
        changing.value = true;
        try {
            changed.value = await service.changeGroup(deviceOrganisationId, payload);
        }
        finally {
            changing.value = false;
        }
        subscriberIds.push(service.subscribe("all", onEntityChanged(changed)));
        return readonly(changed as Ref<DeviceOrganisationDetails>);
    }

    return {
        changing: readonly(changing),
        change,
        changed: readonly(changed)
    }
}
export const useChangeDeviceOrganisationLocation = () => {
    const service = DeviceOrganisationServiceFactory();
    const subscriberIds: number[] = [];

    const changing = ref(false);
    const changed = ref<DeviceOrganisationDetails | null>(null) as Ref<DeviceOrganisationDetails | null>;

    onUnmounted(() => {
        subscriberIds.forEach(id => service.unsubscribe(id));
        subscriberIds.length = 0;
    });

    const change = async (deviceOrganisationId: string, payload: ChangeDeviceOrganisationLocationDTO) => {
        changing.value = true;
        try {
            changed.value = await service.changeLocation(deviceOrganisationId, payload);
        }
        finally {
            changing.value = false;
        }
        subscriberIds.push(service.subscribe("all", onEntityChanged(changed)));
        return readonly(changed as Ref<DeviceOrganisationDetails>);
    }

    return {
        changing: readonly(changing),
        change,
        changed: readonly(changed)
    }
}