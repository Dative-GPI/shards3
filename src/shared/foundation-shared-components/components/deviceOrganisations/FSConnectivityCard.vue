<template>
  <FSCard
    :elevation="true"
    :border="false"
  >
    <FSCol
      align="center-center"
      padding="6px 24px"
    >
      <FSCol
        align="center-center"
        gap="12px"
      >
        <FSChip
          :color="$props.deviceConnectivity.color"
          :prependIcon="$props.deviceConnectivity.icon"
          :label="connectivityLabel"
        />
        <FSRow
          width="hug"
        >
          <FSText>
            {{ $tr("ui.shared.device-connectivity.last-message", "Last message") }}
          </FSText>
        </FSRow>
      </FSCol>
      <FSRow
        v-if="deviceTimestamp"
        width="hug"
      >
        <FSSpan
          font="text-overline"
        >
          {{ deviceTimestamp }}
        </FSSpan>
      </FSRow>
    </FSCol>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { FSDeviceConnectivity } from "@dative-gpi/foundation-shared-components/models";
import { ConnectivityStatus } from "@dative-gpi/foundation-shared-domain/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSConnectivityCard",
  components: {
    FSCard,
    FSChip,
    FSText,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    deviceConnectivity: {
      type: Object as PropType<FSDeviceConnectivity>,
      required: true
    }
  },
  setup(props) {
    const { epochToLongTimeFormat } = useAppTimeZone();
    const { $tr } = useTranslationsProvider();

    const connectivityLabel = computed((): string => {
      switch (props.deviceConnectivity.status) {
        case ConnectivityStatus.Connected:          return $tr("ui.connectivity-status.connected", "Connected");
        case ConnectivityStatus.PartiallyConnected: return $tr("ui.connectivity-status.partially-connected", "Partially connected");
        case ConnectivityStatus.AlmostOffline:      return $tr("ui.connectivity-status.almost-offline", "Almost offline");
        default:                                    return $tr("ui.connectivity-status.offline", "Offline");
      }
    });

    const deviceTimestamp = computed((): string => {
      if (props.deviceConnectivity.sourceTimestamp) {
        return epochToLongTimeFormat(props.deviceConnectivity.sourceTimestamp);
      }
      return "";
    });

    return {
      connectivityLabel,
      deviceTimestamp
    };
  }
});
</script>