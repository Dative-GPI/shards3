<template>
  <FSTooltip
    v-if="$props.statusGroup"
  >
    <template #activator="{ props }">
      <FSColorIcon
        size="m"
        variant="fill"
        :color="$props.statusGroup.color"
        v-bind="props"
      >
        {{ $props.statusGroup.icon }}
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
              :color="$props.statusGroup.color"
            >
              {{ $props.statusGroup.icon }}
            </FSIcon>
            <FSText
              font="text-button"
              :color="$props.statusGroup.color"
            >
              {{ $props.statusGroup.label }}
            </FSText>
          </FSRow>
          <FSRow
            v-if="$props.modelStatus.groupById && $props.statusGroup.groupByValue"
            width="hug"
          >
            <FSSpan>
              {{ $props.modelStatus.groupByLabel }} {{ $props.statusGroup.groupByValue }}
            </FSSpan>
          </FSRow>
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
import { computed, defineComponent, PropType, toRefs } from "vue";

import { FSDeviceStatusGroup, FSModelStatus } from "@dative-gpi/foundation-shared-components/models";
import { useTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSColorIcon from "../FSColorIcon.vue";
import FSTooltip from "../FSTooltip.vue";
import FSDivider from "../FSDivider.vue";
import FSIcon from "../FSIcon.vue";
import FSCard from "../FSCard.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";

export default defineComponent({
  name: "FSStatus",
  components: {
    FSColorIcon,
    FSTooltip,
    FSDivider,
    FSIcon,
    FSCard,
    FSText,
    FSSpan
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
    const { statusGroup } = toRefs(props);

    const { epochToLongFormat } = useTimeZone();

    const cloudTimestamp = computed((): string => {
      if (statusGroup.value.enqueuedTimestamp) {
        return epochToLongFormat(statusGroup.value.enqueuedTimestamp);
      }
      return "";
    });

    const deviceTimestamp = computed((): string => {
      if (statusGroup.value.sourceTimestamp) {
        return epochToLongFormat(statusGroup.value.sourceTimestamp);
      }
      return "";
    });

    return {
      cloudTimestamp,
      deviceTimestamp
    };
  }
});
</script>