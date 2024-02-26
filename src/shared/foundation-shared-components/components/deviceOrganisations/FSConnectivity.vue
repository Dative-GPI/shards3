<template>
  <v-menu
    v-if="$props.deviceConnectivity"
    :closeOnContentClick="false"
    v-model="menu"
  >
    <template #activator="{ props }">
      <FSColorIcon
        size="m"
        variant="fill"
        :color="$props.deviceConnectivity.color"
        v-bind="props"
      >
        {{ $props.deviceConnectivity.icon }}
      </FSColorIcon>
    </template>
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
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useTimeZone, useTranslationsProvider } from "@dative-gpi/foundation-shared-services/composables";
import { FSDeviceConnectivity } from "@dative-gpi/foundation-shared-components/models";
import { ConnectivityStatus } from "@dative-gpi/foundation-shared-domain/models";

import FSColorIcon from "../FSColorIcon.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";

export default defineComponent({
  name: "FSConnectivity",
  components: {
    FSColorIcon,
    FSCard,
    FSChip,
    FSText,
    FSSpan
  },
  props: {
    deviceConnectivity: {
      type: Object as PropType<FSDeviceConnectivity>,
      required: true
    }
  },
  setup(props) {
    const { epochToLongTimeFormat } = useTimeZone();
    const { $tr } = useTranslationsProvider();

    const menu = ref(false);

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
      deviceTimestamp,
      menu
    };
  }
});
</script>