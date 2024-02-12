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
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

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

    const colors = computed(() => useColors().getColors(color.value));
    
    const { slots } = useSlots();

    const classes = computed((): string[] => {
      const classNames = ["fs-text", font.value];
      if (!slots.default) {
        classNames.push("fs-span-pre-wrap");
      }
      if (lineClamp.value > 1) {
        classNames.push("fs-span-line-clamp");
      }
      else if (ellipsis.value) {
        classNames.push("fs-span-ellipsis");
      }
      return classNames;
    });

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      switch (variant.value) {
        case "base": return {
          "--fs-span-line-clamp": lineClamp.value.toString(),
          "--fs-text-color"     : colors.value.base
        };
        case "light": return {
          "--fs-span-line-clamp": lineClamp.value.toString(),
          "--fs-text-color"     : colors.value.light
        };
        case "dark": return {
          "--fs-span-line-clamp": lineClamp.value.toString(),
          "--fs-text-color"     : colors.value.dark
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