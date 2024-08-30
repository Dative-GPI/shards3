<template>
  <v-icon
    class="fs-icon"
    :color="color"
    :style="style"
    v-bind="$attrs"
  >
    <slot />
  </v-icon>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { type ColorBase } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

export default defineComponent({
  name: "FSIcon",
  props: {
    size: {
      type: [Array, String, Number] as PropType<"s" | "m" | "l" | string[] | number[] | string | number | null>,
      required: false,
      default: "m"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"base" | "baseContrast" | "soft" | "softContrast" | "light" | "lightContrast" | "dark" | "darkContrast">,
      required: false,
      default: "base"
    }
  },
  setup(props) {
    const { isMobileSized } = useBreakpoints();
    const { getColors } = useColors();

    const color = computed((): string | undefined => {
      if (props.color) {
        return getColors(props.color)[props.variant]!;
      }
    });

    const style = computed((): StyleValue => {
      switch(props.size) {
        case "s": return {
          "--fs-icon-font-size": isMobileSized.value ? "14px" : "16px"
        };
        case "m": return {
          "--fs-icon-font-size": isMobileSized.value ? "16px" : "20px"
        };
        case "l": return {
          "--fs-icon-font-size": isMobileSized.value ? "20px" : "24px"
        };
        default: return {
          "--fs-icon-font-size": sizeToVar(props.size)
        };
      }
    });

    return {
      color,
      style
    };
  }
});
</script>