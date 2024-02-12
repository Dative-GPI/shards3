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
import { computed, defineComponent, PropType, toRefs } from "vue";

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
      type: String as PropType<"standard" | "fill">,
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
    const { size, variant, color } = toRefs(props);

    const colors = computed(() => useColors().getColors(color.value));

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      switch (variant.value) {
        case "fill": return {
          "--fs-icon-background-color": colors.value.light
        };
        default: return {
          "--fs-icon-background-color": "transparent"
        };
      }
    });

    const classes = computed((): string[] => {
      const classNames = [`fs-icon-${size.value}`];
      switch (variant.value) {
        case "fill":
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