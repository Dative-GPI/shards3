import { DeviceStatusDetails, type DeviceStatusDetailsDTO } from "@dative-gpi/foundation-core-domain/models";
import { HubFactory } from "@dative-gpi/foundation-shared-services/tools/hubFactory";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { HUBS } from "@dative-gpi/foundation-shared-services/config";

import { DEVICE_STATUSES_HUB_URL, DEVICE_STATUS_URL } from "../../config/urls";

const DeviceStatusServiceFactory = new ServiceFactory<DeviceStatusDetailsDTO, DeviceStatusDetails>("deviceStatus", DeviceStatusDetails).create(factory => factory.build(
  factory.addGet(DEVICE_STATUS_URL),
  factory.addNotify(notify => ({
    notifyUpdate: (status: DeviceStatusDetails) => notify.notify("update", status)
  }))
));

const useDeviceStatusesHub = HubFactory.create(DEVICE_STATUSES_HUB_URL,
  (connection) => {
    connection.on(HUBS.UPDATE_DEVICE_STATUS,
      (payload: DeviceStatusDetailsDTO) => DeviceStatusServiceFactory.notifyUpdate(new DeviceStatusDetails(payload)));
  },
  async (connection) => {
    await connection.invoke(HUBS.SUBSCRIBE);
  }
);

export const useDeviceStatus = ComposableFactory.get(DeviceStatusServiceFactory);
export const useTrackDeviceStatuses = ComposableFactory.track(DeviceStatusServiceFactory);
export const useWatchDeviceStatuses = HubFactory.createWatcher(useDeviceStatusesHub);