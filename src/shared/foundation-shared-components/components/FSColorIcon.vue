<template>
  <FSColor
    class="fs-color-icon"
    :color="$props.color"
    :border="false"
    :height="size"
    :width="size"
  >
    <FSRow
      align="center-center"
    >
      <FSIcon
        :color="$props.color"
      >
        <slot />
      </FSIcon>
    </FSRow>  
</FSColor>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSColor from "./FSColor.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSColorIcon",
  components: {
    FSColor,
    FSIcon,
    FSRow
  },
  props: {
    size: {
      type: [Array, String, Number] as PropType<"s" | "m" | "l" | string[] | number[] | string | number | null>,
      required: false,
      default: "m"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    }
  },
  setup(props) {
    const { isMobileSized } = useBreakpoints();

    const size = computed((): string[] | number[] | string | number | null => {
      switch(props.size) {
        case "s": return isMobileSized.value ? "18px" : "20px";
        case "m": return isMobileSized.value ? "20px" : "26px";
        case "l": return isMobileSized.value ? "36px" : "40px";
        default: return props.size;
      }
    });

    return {
      size
    };
  }
});
</script>