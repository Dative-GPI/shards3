
<template>
  <FSTile
    width="200px"
    height="130px"
    borderRadius="6px"
    v-bind="$attrs"
  >
    <FSCol
      align="center-center"
      gap="6px"
    >
      <FSIcon
        :icon="$props.icon"
        size="24px"
      />
      <FSText
        :lineClamp="1"
      >
        {{ $props.label }}
      </FSText>
      <FSSpan
        font="text-overline"
        :lineClamp="1"
      >
        {{ epochToShortTimeFormat($props.triggerProcessedTimestamp) }}
      </FSSpan>
      <FSText
        font="text-overline"
        :lineClamp="1"
      >
        {{ $props.deviceOrganisationLabel }}
      </FSText>
    </FSCol>
  </FSTile>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSText from "../FSText.vue";
import FSTile from "./FSTile.vue";
import FSSpan from "../FSSpan.vue";
import FSIcon from "../FSIcon.vue";
import FSCol from "../FSCol.vue";


export default defineComponent({
  name: "FSAlertTileUI",
  components: {
    FSText,
    FSTile,
    FSIcon,
    FSSpan,
    FSCol,
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    deviceOrganisationLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    triggerProcessedTimestamp: {
      type: Number as PropType<number | null>,
      required: false,
      default: null
    }
  },
  setup() {
    const { epochToShortTimeFormat } = useDateFormat();

    return {
      ColorEnum,
      epochToShortTimeFormat
    };
  }
});
</script>
