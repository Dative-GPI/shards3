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

import { useSlots } from "@dative-gpi/foundation-shared-components/composables";

export default defineComponent({
  name: "FSSpan",
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
    }
  },
  setup(props) {
    const { font, lineClamp, ellipsis } = toRefs(props);
    
    const { slots } = useSlots();

    const classes = computed((): string[] => {
      const classNames = ["fs-span", font.value];
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

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-span-line-clamp": lineClamp.value.toString()
      };
    });

    return {
      classes,
      style
    };
  }
});
</script>