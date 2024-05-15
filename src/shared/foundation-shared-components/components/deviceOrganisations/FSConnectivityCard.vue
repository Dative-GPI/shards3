<template>
  <FSCard
    padding="2px 2px 8px 2px"
    :elevation="true"
    :border="false"
  >
    <FSCol
      align="center-center"
    >
      <FSCol
        align="center-center"
        gap="0px"
      >
        <FSRow
          align="center-right"
        >
          <FSButton
            icon="mdi-close"
            variant="icon"
            @click="$emit('close')"
          />
        </FSRow>
        <FSCol
          align="center-center"
          padding="0px 24px"
          gap="12px"
        >
          <FSChip
            :prependIcon="$props.deviceConnectivity.icon"
            :color="$props.deviceConnectivity.color"
            :label="connectivityLabel($props.deviceConnectivity.status)"
          />
          <FSRow
            width="hug"
          >
            <FSText>
              {{ $tr("ui.shared.device-connectivity.last-message", "Last message") }}
            </FSText>
          </FSRow>
        </FSCol>
      </FSCol>
      <FSRow
        v-if="deviceTimestamp"
        padding="0px 24px"
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

import { FSDeviceConnectivity } from "@dative-gpi/foundation-shared-components/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import { connectivityLabel } from "../../utils";

import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSConnectivityCard",
  components: {
    FSButton,
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
  emit: ["close"],
  setup(props) {
    const { epochToLongTimeFormat } = useAppTimeZone();

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