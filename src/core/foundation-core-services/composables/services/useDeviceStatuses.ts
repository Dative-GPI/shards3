import { DeviceStatusDetails, DeviceStatusDetailsDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { DEVICE_STATUS_URL } from "../../config/urls";

const DeviceStatusServiceFactory = new ServiceFactory<DeviceStatusDetailsDTO, DeviceStatusDetails>("deviceStatus", DeviceStatusDetails).create(factory => factory.build(
    factory.addGet(DEVICE_STATUS_URL),
    factory.addNotify()
));

export const useDeviceStatus = ComposableFactory.get(DeviceStatusServiceFactory);