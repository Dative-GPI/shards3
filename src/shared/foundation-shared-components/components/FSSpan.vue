<template>
  <span
    :class="classes"
    :style="style"
    v-bind="$attrs"
  >
    <slot>
      {{ $props.label }}
    </slot>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useSlots } from "@dative-gpi/foundation-shared-components/composables";

export default defineComponent({
  name: "FSSpan",
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
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
    }
  },
  setup(props) {
    const { slots } = useSlots();

    const classes = computed((): string[] => {
      const classNames = ["fs-span", props.font];
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
      return {
        "--fs-span-line-clamp": props.lineClamp.toString()
      };
    });

    return {
      classes,
      style
    };
  }
});
</script>