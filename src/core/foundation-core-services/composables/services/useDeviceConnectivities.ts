import { DeviceConnectivityDetails, DeviceConnectivityDetailsDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { DEVICE_CONNECTIVITY_URL } from "../../config/urls";

const DeviceConnectivityServiceFactory = new ServiceFactory<DeviceConnectivityDetailsDTO, DeviceConnectivityDetails>("deviceConnectivity", DeviceConnectivityDetails).create(factory => factory.build(
    factory.addGet(DEVICE_CONNECTIVITY_URL),
    factory.addNotify()
));

export const useDeviceConnectivity = ComposableFactory.get(DeviceConnectivityServiceFactory);