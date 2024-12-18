<template>
  <div
    :class="classes"
    :style="style"
    v-bind="$attrs"
  >
    <span>
      <slot>
        {{ $props.label }}
      </slot>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { useBreakpoints, useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSText",
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    font: {
      type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-h4" | "text-body" | "text-button" | "text-overline">,
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
      type: String as PropType<"base" | "baseContrast" | "light" | "lightContrast" | "dark" | "darkContrast" | "soft" | "softContrast">,
      required: false,
      default: "base"
    }
  },
  setup(props) {
    const { fontStyles } = useBreakpoints();
    const { getColors } = useColors();
    const { slots } = useSlots();

    const colors = computed(() => getColors(props.color));

    const style = computed((): StyleValue => ({
      "--fs-span-line-clamp": props.lineClamp.toString(),
      "--fs-text-color"     : colors.value[props.variant]!,
      ...fontStyles.value
    }));

    const classes = computed((): string[] => {
      const classNames = ["fs-text", props.font];
      if (!slots.default) {
        classNames.push("fs-span-pre-wrap");
      }
      if (props.lineClamp > 1) {
        classNames.push("fs-span-line-clamp");
      }
      else if (props.ellipsis) {
        classNames.push("fs-span-ellipsis");
      }
      return classNames;
    });

    return {
      classes,
      style
    };
  }
});
</script>