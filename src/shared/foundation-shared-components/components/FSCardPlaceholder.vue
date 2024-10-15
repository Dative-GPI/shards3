<template>
  <component
    :is="$attrs.onClick ? FSClickable : FSCard"
    borderStyle="dashed"
    padding="24px"
    :height="$props.height"
    :width="$props.width"
    :border="true"
    @click="$emit('click')"
    v-bind="$attrs"
  >
    <FSRow
      align="center-center"
    >
      <FSIcon
        v-if="$props.icon"
        :color="ColorEnum.Light"
        variant="dark"
      >
        {{ $props.icon }}
      </FSIcon>
      <FSText
        v-if="$props.label"
        :color="ColorEnum.Light"
        variant="dark"
      >
        {{ $props.label }}
      </FSText>
    </FSRow>
  </component>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { ColorEnum } from "../models";

import FSClickable from "./FSClickable.vue";
import FSCard from "./FSCard.vue";
import FSIcon from "./FSIcon.vue";
import FSText from "./FSText.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSCardPlaceholder",
  components: {
    FSClickable,
    FSCard,
    FSIcon,
    FSText,
    FSRow
  },
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "fit-content"
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "100%"
    },
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["click"],
  setup() {
    return {
      ColorEnum,
      FSClickable,
      FSCard,
    };
  }
});
</script>