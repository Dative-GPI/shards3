<template>
  <div
    :class="classes"
    :style="style"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

export default defineComponent({
  name: "FSContainer",
  props: {
    padding: {
      type: Number,
      required: false,
      default: 8
    },
    border: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { padding, border } = toRefs(props);

    const lights = useColors().getColors(ColorBase.Light);

    const backgrounds = useColors().getColors(ColorBase.Background);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-container-padding"         : `${padding.value}px`,
        "--fs-container-background-color": backgrounds.base,
        "--fs-container-border-color"    : lights.dark
      };
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-container"];
      if (border.value) {
        classNames.push("fs-container-border");
      }
      return classNames;
    });

    return {
      style,
      classes
    };
  }
})
</script>