<template>
  <v-menu
    :closeOnContentClick="false"
    v-model="menu"
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

import { FSDeviceStatusGroup, FSModelStatus } from "@dative-gpi/foundation-shared-components/models";
import { useTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSColorIcon from "../FSColorIcon.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";

export default defineComponent({
  name: "FSStatus",
  components: {
    FSColorIcon,
    FSCard,
    FSChip,
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
    const { epochToLongTimeFormat } = useTimeZone();

    const menu = ref(false);

    const deviceTimestamp = computed((): string => {
      if (props.statusGroup.sourceTimestamp) {
        return epochToLongTimeFormat(props.statusGroup.sourceTimestamp);
      }
      return "";
    });

    return {
      deviceTimestamp,
      menu
    };
  }
});
</script>