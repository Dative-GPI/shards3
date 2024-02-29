import { Ref, readonly, ref } from "vue";

import { DeviceConnectivityDetails, DeviceConnectivityDetailsDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { DEVICE_CONNECTIVITY_URL } from "../../config/urls";

const DeviceConnectivityServiceFactory = new ServiceFactory<DeviceConnectivityDetailsDTO, DeviceConnectivityDetails>("deviceConnectivity", DeviceConnectivityDetails).create(factory => factory.build(
    factory.addGet(DEVICE_CONNECTIVITY_URL),
    factory.addNotify((notifyService) => ({
        getNotify: async (deviceConnectivityId: string): Promise<DeviceConnectivityDetails> => {
            const response = await ServiceFactory.http.get(DEVICE_CONNECTIVITY_URL(deviceConnectivityId));
            const result = new DeviceConnectivityDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useDeviceConnectivity = ComposableFactory.get(DeviceConnectivityServiceFactory);
export const useNotifyDeviceConnectivity = () => {
    const service = DeviceConnectivityServiceFactory();

    const fetching = ref(false);
    const fetched = ref<DeviceConnectivityDetails | null>(null) as Ref<DeviceConnectivityDetails | null>;

    const fetch = async (deviceConnectivityId: string) => {
        fetching.value = true;
        try {
            fetched.value = await service.getNotify(deviceConnectivityId);
        }
        finally {
            fetching.value = false;
        }

        return readonly(fetched as Ref<DeviceConnectivityDetails>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    };
}