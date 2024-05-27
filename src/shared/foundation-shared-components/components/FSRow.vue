<template>
  <div
    :style="style"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

export default defineComponent({
  name: "FSRow",
  props: {
    height: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "hug"
    },
    width: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "fill"
    },
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "0"
    },
    gap: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "8px"
    },
    align: {
      type: String as PropType<"top-left" | "top-center" | "top-right" | "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right">,
      required: false,
      default: "top-left"
    },
    wrap: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const style = computed((): { [key: string] : string | null | undefined } => ({
      "--fs-row-flex-wrap": props.wrap ? "wrap" : "nowrap",
      "--fs-row-padding"  : sizeToVar(props.padding),
      "--fs-row-gap"      : sizeToVar(props.gap),
      "--fs-row-width"    : sizeToVar(props.width),
      "--fs-row-height"   : sizeToVar(props.height)
    }));

    const classes = computed((): string[] => {
      const classNames = ["fs-row"];
      switch (props.width) {
        case "hug":
          classNames.push("fs-row-width-hug");
          break;
        case "fill":
          classNames.push("fs-row-width-fill");
          break;
        default: 
          classNames.push("fs-row-width-fixed");
          break;
      }
      switch (props.height) {
        case "hug":
          classNames.push("fs-row-height-hug");
          break;
        case "fill":
          classNames.push("fs-row-height-fill");
          break;
        default: 
          classNames.push("fs-row-height-fixed");
          break;
      }
      switch (props.align) {
        case "top-left":
          classNames.push("fs-row-top-left");
          break;
        case "top-center":
          classNames.push("fs-row-top-center");
          break;
        case "top-right":
          classNames.push("fs-row-top-right");
          break;
        case "center-left":
          classNames.push("fs-row-center-left");
          break;
        case "center-center":
          classNames.push("fs-row-center-center");
          break;
        case "center-right":
          classNames.push("fs-row-center-right");
          break;
        case "bottom-left":
          classNames.push("fs-row-bottom-left");
          break;
        case "bottom-center":
          classNames.push("fs-row-bottom-center");
          break;
        case "bottom-right":
          classNames.push("fs-row-bottom-right");
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