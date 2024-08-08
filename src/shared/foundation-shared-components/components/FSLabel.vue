<template>
  <span
    v-if="$props.label"
    :class="classes"
    :style="style"
    v-bind="$attrs"
  >
    <slot>
      {{ $props.label }}
    </slot>
  </span>
  <FSLoader
    v-else
    :variant="$props.font"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";

import FSLoader from "./FSLoader.vue";

export default defineComponent({
  name: "FSLabel",
  components: {
    FSLoader
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    font: {
      type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-h4" | "text-body" | "text-button" | "text-overline" | "text-underline">,
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
    const { getColors } = useColors();
    const { slots } = useSlots();

    const colors = computed(() => getColors(props.color));

    const style = computed((): StyleValue => {
      switch (props.variant) {
        case "base": return {
          "--fs-span-line-clamp": props.lineClamp.toString(),
          "--fs-label-color"    : colors.value.base
        };
        case "light": return {
          "--fs-span-line-clamp": props.lineClamp.toString(),
          "--fs-label-color"    : colors.value.light
        };
        case "dark": return {
          "--fs-span-line-clamp": props.lineClamp.toString(),
          "--fs-label-color"    : colors.value.dark
        };
      }
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-label", props.font];
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