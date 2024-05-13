<template>
  <FSCard
    :elevation="true"
    :border="false"
    padding="12px 6px 6px 6px"
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
          :color="$props.statusGroup.color"
          :prependIcon="$props.statusGroup.icon"
          :label="$props.statusGroup.label"
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
      <FSRow
        v-if="deviceTimestamp"
        width="hug"
      >
        <FSSpan
          font="text-overline"
          class="fs-status-card-timestamp-span"
        >
          {{ deviceTimestamp }}
        </FSSpan>
      </FSRow>
    </FSCol>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { FSDeviceStatusGroup, FSModelStatus } from "@dative-gpi/foundation-shared-components/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSStatusCard",
  components: {
    FSCard,
    FSChip,
    FSText,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    modelStatus: {
      type: Object as PropType<FSModelStatus>,
      required: true
    },
    statusGroup: {
      type: Object as PropType<FSDeviceStatusGroup>,
      required: true
    }
  },
  setup(props) {
    const { epochToLongTimeFormat } = useAppTimeZone();

    const deviceTimestamp = computed((): string => {
      if (props.statusGroup.sourceTimestamp) {
        return epochToLongTimeFormat(props.statusGroup.sourceTimestamp);
      }
      return "";
    });

    return {
      deviceTimestamp
    };
  }
});
</script>