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
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSContainer",
  props: {
    padding: {
      type: [String, Number],
      required: false,
      default: 8
    },
    border: {
      type: Boolean,
      required: false,
      default: true
    },
    elevation: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const { padding, border, elevation } = toRefs(props);

    const backgrounds = useColors().getColors(ColorEnum.Background);
    const lights = useColors().getColors(ColorEnum.Light);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-container-padding"         : typeof(padding.value) === "string" ? padding.value : `${padding.value}px`,
        "--fs-container-background-color": backgrounds.base,
        "--fs-container-border-color"    : lights.dark
      };
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-container"];
      if (border.value) {
        classNames.push("fs-container-border");
      }
      if (elevation.value) {
        classNames.push("fs-container-elevation");
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