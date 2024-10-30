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
        :prependIcon="$props.statusGroup.icon"
        :color="$props.statusGroup.color"
        :label="$props.modelStatus.label"
      />
      <FSCol
        v-if="$props.statusGroup.value"
        align="center-center"
        gap="0px"
      >
        <FSText
          v-if="$props.statusGroup.value && $props.modelStatus.groupById && $props.statusGroup.groupByValue"
        >
          {{ $props.modelStatus.groupByLabel }} {{ $props.statusGroup.groupByValue }}
        </FSText>
        <FSText
          v-if="$props.statusGroup.value"
          font="text-button"
          :color="$props.statusGroup.color"
        >
          {{ statusValue }}
        </FSText>
      </FSCol>
      <FSText
        v-if="deviceTimestamp"
        font="text-overline"
        variant="soft"
      >
        {{ deviceTimestamp }}
      </FSText>
    </FSCol>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import type { FSDeviceStatusGroup, FSModelStatus } from "@dative-gpi/foundation-shared-components/models";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSStatusCard",
  components: {
    FSCard,
    FSChip,
    FSText,
    FSCol
  },
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    modelStatus: {
      type: Object as PropType<FSModelStatus>,
      required: true
    },
    statusGroup: {
      type: Object as PropType<FSDeviceStatusGroup>,
      required: true
    }
  },
  emits: ["close"],
  setup(props) {
    const { epochToLongTimeFormat } = useDateFormat();

    const statusValue = computed((): string => {
      if (props.statusGroup.label) {
        return props.statusGroup.label;
      }
      if (props.statusGroup.value && !isNaN(parseFloat(props.statusGroup.value))) {
        return `${parseFloat(props.statusGroup.value).toLocaleString("fullwide", { maximumFractionDigits: 2 })} ${props.statusGroup.unit}`;
      }
      return `${props.statusGroup.value} ${props.statusGroup.unit}`;
    });

    const deviceTimestamp = computed((): string => {
      if (props.statusGroup.sourceTimestamp) {
        return epochToLongTimeFormat(props.statusGroup.sourceTimestamp);
      }
      return "";
    });

    return {
      deviceTimestamp,
      statusValue
    };
  }
});
</script>