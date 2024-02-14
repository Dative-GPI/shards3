<template>
  <FSTooltip
    v-if="$props.deviceConnectivity"
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
    <FSCard>
      <FSCol>
        <FSCol
          align="center-center"
          :gap="2"
        >
          <FSRow
            width="hug"
          >
            <FSIcon
              size="m"
              :color="$props.deviceConnectivity.color"
            >
              {{ $props.deviceConnectivity.icon }}
            </FSIcon>
            <FSText
              font="text-button"
              :color="$props.deviceConnectivity.color"
            >
              {{ connectivityLabel }}
            </FSText>
          </FSRow>
          <FSText>
            {{ $tr("ui.shared.device-connectivity.last-message", "Last message") }}
          </FSText>
        </FSCol>
        <template v-if="cloudTimestamp || deviceTimestamp">
          <FSDivider />
          <FSCol
            align="center-center"
            :gap="2"
          >
            <FSRow
              v-if="cloudTimestamp"
              width="hug"
            >
              <FSIcon>
                mdi-cloud-outline
              </FSIcon>
              <FSSpan>
                {{ cloudTimestamp }}
              </FSSpan>
            </FSRow>
            <FSRow
              v-if="deviceTimestamp"
              width="hug"
            >
              <FSIcon>
                mdi-widgets-outline
              </FSIcon>
              <FSSpan>
                {{ deviceTimestamp }}
              </FSSpan>
            </FSRow>
          </FSCol>
        </template>
      </FSCol>
    </FSCard>
  </FSTooltip>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useTimeZone, useTranslationsProvider } from "@dative-gpi/foundation-shared-services/composables";
import { FSDeviceConnectivity } from "@dative-gpi/foundation-shared-components/models";
import { ConnectivityStatus } from "@dative-gpi/foundation-shared-domain/models";

import FSColorIcon from "../FSColorIcon.vue";
import FSTooltip from "../FSTooltip.vue";
import FSDivider from "../FSDivider.vue";
import FSCard from "../FSCard.vue";
import FSIcon from "../FSIcon.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";

export default defineComponent({
  name: "FSConnectivity",
  components: {
    FSColorIcon,
    FSTooltip,
    FSDivider,
    FSCard,
    FSIcon,
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

    const connectivityLabel = computed((): string => {
      switch (props.deviceConnectivity.status) {
        case ConnectivityStatus.Connected:          return $tr("ui.connectivity-status.connected", "Connected");
        case ConnectivityStatus.PartiallyConnected: return $tr("ui.connectivity-status.partially-connected", "Partially connected");
        case ConnectivityStatus.AlmostOffline:      return $tr("ui.connectivity-status.almost-offline", "Almost offline");
        default:                                    return $tr("ui.connectivity-status.offline", "Offline");
      }
    });

    const cloudTimestamp = computed((): string => {
      if (props.deviceConnectivity.enqueuedTimestamp) {
        return epochToLongTimeFormat(props.deviceConnectivity.enqueuedTimestamp);
      }
      return "";
    });

    const deviceTimestamp = computed((): string => {
      if (props.deviceConnectivity.sourceTimestamp) {
        return epochToLongTimeFormat(props.deviceConnectivity.sourceTimestamp);
      }
      return "";
    });

    return {
      connectivityLabel,
      cloudTimestamp,
      deviceTimestamp
    };
  }
});
</script>