<template>
  <FSRow
    align="center-center"
  >
    <FSButtonPreviousIcon />
    <FSRow>
      <FSColor
        :border="false"
        :color="$props.color"
        width="100%"
        height="40px"
      >
        <FSRow
          width="100%"
          height="100%"
          align="center-center"
        >
          <FSSpan
            font="text-h3"
          >
            {{ monthToString($props.month) }}
          </FSSpan>
          <FSSpan
            font="text-h3"
          >
            {{ $props.year }}
          </FSSpan>
        </FSRow>
      </FSColor>
    </FSRow>
    <FSButtonNextIcon />
  </FSRow>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSRow from "../FSRow.vue";
import FSSpan from "../FSSpan.vue";
import FSColor from "../FSColor.vue";

import FSButtonNextIcon from "../buttons/FSButtonNextIcon.vue";
import FSButtonPreviousIcon from "../buttons/FSButtonPreviousIcon.vue";

export default defineComponent({
  name: "FSMonthSelector",
  components: {
    FSRow,
    FSSpan,
    FSColor,
    FSButtonNextIcon,
    FSButtonPreviousIcon
  },
  props: {
    color: {
      type: String,
      required: false,
      default: ColorEnum.Primary
    },
    month: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  setup() {
    const monthToString = (month: number) => {
      return month;
    }

    return {
      monthToString
    };
  }
});
</script>