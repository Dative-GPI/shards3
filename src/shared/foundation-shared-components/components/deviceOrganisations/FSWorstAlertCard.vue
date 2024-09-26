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
        :label="$tr('ui.common.alert', 'Alert')"
        :prependIcon="AlertTools.statusIcon($props.deviceAlert?.status)"
        :color="AlertTools.criticityColor($props.deviceAlert?.criticity)"
      />
      <FSCol
        align="center-center"
        gap="0px"
      >
        <FSText>
          {{ $tr('ui.alert.status', 'Status') }} : {{ AlertTools.statusLabel($props.deviceAlert?.status) }}
        </FSText>
        <FSText
          font="text-button"
          :color="AlertTools.criticityColor($props.deviceAlert?.criticity)"
        >
          {{ $props.deviceAlert.label }}
        </FSText>
      </FSCol>
      <FSText
        v-if="deviceTimestamp"
        font="text-overline"
        variant="dark"
      >
        {{ deviceTimestamp }}
      </FSText>
      <FSButton
        v-if="$props.alertTo"
        icon="mdi-information-outline"
        :label="$tr('ui.alert.details', 'Alert details')"
        :to="$props.alertTo($props.deviceAlert.id)"
      />
    </FSCol>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type FSDeviceAlert } from "@dative-gpi/foundation-shared-components/models";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { AlertTools } from "@dative-gpi/foundation-shared-components/tools";

import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSWorstAlertCard",
  components: {
    FSButton,
    FSCard,
    FSChip,
    FSText,
    FSCol,
  },
  props: {
    deviceAlert: {
      type: Object as PropType<FSDeviceAlert>,
      required: true
    },
    alertTo: {
      type: Function,
      required: false,
      default: null
    }
  },
  emits: ["close"],
  setup(props) {
    const { epochToLongTimeFormat } = useDateFormat();

    const deviceTimestamp = computed((): string => {
      if (props.deviceAlert.sourceTimestamp) {
        return epochToLongTimeFormat(props.deviceAlert.sourceTimestamp);
      }
      return "";
    });

    return {
      deviceTimestamp,
      AlertTools
    };
  }
});
</script>