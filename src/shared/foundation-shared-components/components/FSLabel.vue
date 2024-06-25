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
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import type { ColorBase} from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

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

    const style = computed((): { [key: string] : string | null | undefined } => {
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

    return {
      classes,
      style
    };
  }
});
</script>