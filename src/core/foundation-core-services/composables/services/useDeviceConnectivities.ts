import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { DeviceConnectivityDetails, DeviceConnectivityDetailsDTO } from "@dative-gpi/foundation-core-domain/models";
import { HubFactory } from "@dative-gpi/foundation-shared-services/tools/hubFactory";

import { DEVICE_CONNECTIVITIES_HUB_URL, DEVICE_CONNECTIVITY_URL } from "../../config/urls";
import { HUBS } from "../../config/literals";

const DeviceConnectivityServiceFactory = new ServiceFactory<DeviceConnectivityDetailsDTO, DeviceConnectivityDetails>("deviceConnectivity", DeviceConnectivityDetails).create(factory => factory.build(
    factory.addGet(DEVICE_CONNECTIVITY_URL),
    factory.addNotify(notify => ({
        notifyUpdate: (connectivity: DeviceConnectivityDetails) => notify.notify("update", connectivity)
    }))
));

const useDeviceConnectivityHub = HubFactory.create(DEVICE_CONNECTIVITIES_HUB_URL,
    (connection) => {
        connection.on(HUBS.UPDATE_DEVICE_CONNECTIVITY,
            (payload: DeviceConnectivityDetailsDTO) => DeviceConnectivityServiceFactory.notifyUpdate(new DeviceConnectivityDetails(payload)));
    },
    async (connection) => {
        await connection.invoke(HUBS.SUBSCRIBE);
    }
);

export const useDeviceConnectivity = ComposableFactory.get(DeviceConnectivityServiceFactory);
export const useTrackDeviceConnectivity = ComposableFactory.track(DeviceConnectivityServiceFactory);
export const useWatchDeviceConnectivity = HubFactory.createWatcher(useDeviceConnectivityHub);
