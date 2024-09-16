<template>
  <FSCard
    padding="12px 24px"
    :elevation="true"
  >
    <FSCol
      align="center-center"
      gap="12px"
    >
      <FSChip
        :prependIcon="$props.deviceConnectivity.icon"
        :color="$props.deviceConnectivity.color"
        :label="connectivityLabel($props.deviceConnectivity.status)"
      />
      <FSCol
        align="center-center"
        gap="0px"
      >
        <FSText>
          {{ $tr("ui.device.last-message-received", "Last message received") }}
        </FSText>
        <FSText
          v-if="deviceTimestamp"
          font="text-button"
          :color="$props.deviceConnectivity.color"
          variant="soft"
        >
          {{ deviceTimestamp }}
        </FSText>
      </FSCol>
    </FSCol>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import type { FSDeviceConnectivity } from "@dative-gpi/foundation-shared-components/models";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import { connectivityLabel } from "../../utils";

import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSConnectivityCard",
  components: {
    FSCard,
    FSChip,
    FSText,
    FSCol,
  },
  props: {
    deviceConnectivity: {
      type: Object as PropType<FSDeviceConnectivity>,
      required: true
    }
  },
  emit: ["close"],
  setup(props) {
    const { epochToLongTimeFormat } = useDateFormat();

    const deviceTimestamp = computed((): string => {
      if (props.deviceConnectivity.sourceTimestamp) {
        return epochToLongTimeFormat(props.deviceConnectivity.sourceTimestamp);
      }
      return "";
    });

    return {
      deviceTimestamp,
      connectivityLabel
    };
  }
});
</script>