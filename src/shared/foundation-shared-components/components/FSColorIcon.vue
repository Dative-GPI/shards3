<template>
  <v-icon
    :color="$props.color"
    :class="classes"
    :style="style"
    v-bind="$attrs"
  >
    <slot />
  </v-icon>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

export default defineComponent({
  name: "FSColorIcon",
  props: {
    size: {
      type: String as PropType<"s" | "m" | "l">,
      required: false,
      default: "m"
    },
    variant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "standard"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));

    const style = computed((): { [key: string] : string } => {
      switch (props.variant) {
        case "full": return {
          "--fs-icon-background-color": colors.value.light
        };
        default: return {
          "--fs-icon-background-color": "transparent"
        };
      }
    });

    const classes = computed((): string[] => {
      const classNames = [`fs-icon-${props.size}`];
      switch (props.variant) {
        case "full":
          classNames.push("fs-color-icon");
          break;
      }
      return classNames;
    });

    return {
      style,
      classes
    };
  }
});
</script>