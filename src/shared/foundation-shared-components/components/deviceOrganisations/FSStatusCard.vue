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
          v-if="$props.closable"
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
            :prependIcon="$props.statusGroup.icon"
            :color="$props.statusGroup.color"
            :label="statusLabel"
          />
          <FSRow
            v-if="$props.statusGroup.value"
            width="hug"
          >
            <FSText
              font="text-button"
              :color="$props.statusGroup.color"
            >
              {{ $props.statusGroup.value }} {{ $props.statusGroup.unit }}
            </FSText>
          </FSRow>
          <FSRow
            v-if="$props.statusGroup.value && $props.modelStatus.groupById && $props.statusGroup.groupByValue"
            width="hug"
          >
            <FSSpan>
              {{ $props.modelStatus.groupByLabel }} {{ $props.statusGroup.groupByValue }}
            </FSSpan>
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
import { computed, defineComponent, type PropType } from "vue";

import type { FSDeviceStatusGroup, FSModelStatus } from "@dative-gpi/foundation-shared-components/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSStatusCard",
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
    const { epochToLongTimeFormat } = useAppTimeZone();

    const statusLabel = computed((): string => {
      return props.statusGroup.label || props.modelStatus.label;
    });

    const deviceTimestamp = computed((): string => {
      if (props.statusGroup.sourceTimestamp) {
        return epochToLongTimeFormat(props.statusGroup.sourceTimestamp);
      }
      return "";
    });

    return {
      deviceTimestamp,
      statusLabel
    };
  }
});
</script>