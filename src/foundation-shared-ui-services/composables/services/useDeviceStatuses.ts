import { Ref, readonly, ref } from "vue";

import { DeviceStatusDetails, DeviceStatusDetailsDTO } from "@dative-gpi/foundation-shared-ui-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { DEVICE_STATUS_URL } from "../../config/urls";

const DeviceStatusServiceFactory = new ServiceFactory<DeviceStatusDetailsDTO, DeviceStatusDetails>("deviceStatus", DeviceStatusDetails).create(factory => factory.build(
    factory.addGet(DEVICE_STATUS_URL),
    factory.addNotify((notifyService) => ({
        getNotify: async (deviceStatusId: string): Promise<DeviceStatusDetails> => {
            const response = await ServiceFactory.http.get(DEVICE_STATUS_URL(deviceStatusId));
            const result = new DeviceStatusDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useDeviceStatus = ComposableFactory.get(DeviceStatusServiceFactory);
export const useNotifyDeviceStatus = () => {
    const service = DeviceStatusServiceFactory();

    const fetching = ref(false);
    const fetched = ref<DeviceStatusDetails | null>(null) as Ref<DeviceStatusDetails | null>;

    const fetch = async (deviceStatusId: string) => {
        fetching.value = true;
        try {
            fetched.value = await service.getNotify(deviceStatusId);
        }
        finally {
            fetching.value = false;
        }

        return readonly(fetched as Ref<DeviceStatusDetails>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    };
}