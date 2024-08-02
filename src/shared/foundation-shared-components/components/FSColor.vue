<template>
  <FSCard
    :variant="$props.variant"
    :border="$props.border"
    :color="$props.color"
    v-bind="$attrs"
  >
    <slot
      v-bind="{ color: $props.color, colors }"
    />
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSCard from "./FSCard.vue";

export default defineComponent({
  name: "FSColor",
  components: {
    FSCard
  },
  props: {
    variant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "standard"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    border: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));

    return {
      colors
    };
  }
});
</script>