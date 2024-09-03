import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ConnectivityStatus } from "@dative-gpi/foundation-shared-domain/enums";

const { $tr } = useTranslationsProvider();

export const connectivityLabel = ((status: ConnectivityStatus): string => {
    switch (status) {
      case ConnectivityStatus.Connected:          return $tr("ui.connectivity-status.connected", "Connected");
      case ConnectivityStatus.PartiallyConnected: return $tr("ui.connectivity-status.partially-connected", "Partially connected");
      case ConnectivityStatus.AlmostOffline:      return $tr("ui.connectivity-status.almost-offline", "Almost offline");
      default:                                    return $tr("ui.connectivity-status.offline", "Offline");
    }
});