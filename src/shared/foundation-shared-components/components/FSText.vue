<template>
  <span
    :class="classes"
    :style="style"
    v-bind="$attrs"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs, useSlots } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

export default defineComponent({
  name: "FSText",
  props: {
    font: {
      type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-body" | "text-button" | "text-overline" | "text-underline">,
      required: false,
      default: "text-body"
    },
    lineClamp: {
      type: Number,
      required: false,
      default: 1
    },
    ellipsis: {
      type: Boolean,
      required: false,
      default: true
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    variant: {
      type: String as PropType<"base" | "light" | "dark">,
      required: false,
      default: "dark"
    }
  },
  setup(props) {
    const { font, lineClamp, ellipsis, color, variant } = toRefs(props);

    const colors = useColors().getColors(color.value);
    
    const slots = useSlots();

    const classes = computed((): string[] => {
      const classes = ["fs-text", font.value];
      if (!slots.default) {
        classes.push("fs-span-pre-wrap");
      }
      if (lineClamp.value > 1) {
        classes.push("fs-span-line-clamp");
      }
      else if (ellipsis.value) {
        classes.push("fs-span-ellipsis");
      }
      return classes;
    });

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      switch (variant.value) {
        case "base": return {
          "--fs-span-line-clamp": lineClamp.value.toString(),
          "--fs-text-color": colors.base
        };
        case "light": return {
          "--fs-span-line-clamp": lineClamp.value.toString(),
          "--fs-text-color": colors.light
        };
        case "dark": return {
          "--fs-span-line-clamp": lineClamp.value.toString(),
          "--fs-text-color": colors.dark
        };
      }
    });

    return {
      classes,
      style
    };
  }
});
</script>