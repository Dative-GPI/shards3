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
  name: "FSCol",
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
    }
  },
  setup(props) {
    const style = computed((): { [key: string] : string | null | undefined } => ({
      "--fs-col-padding": sizeToVar(props.padding),
      "--fs-col-gap"    : sizeToVar(props.gap),
      "--fs-col-width"  : sizeToVar(props.width),
      "--fs-col-height" : sizeToVar(props.height)
    }));

    const classes = computed((): string[] => {
      const classNames = ["fs-col"];
      switch (props.width) {
        case "hug":
          classNames.push("fs-col-width-hug");
          break;
        case "fill":
          classNames.push("fs-col-width-fill");
          break;
        default: 
          classNames.push("fs-col-width-fixed");
          break;
      }
      switch (props.height) {
        case "hug":
          classNames.push("fs-col-height-hug");
          break;
        case "fill":
          classNames.push("fs-col-height-fill");
          break;
        default: 
          classNames.push("fs-col-height-fixed");
          break;
      }
      switch (props.align) {
        case "top-left":
          classNames.push("fs-col-top-left");
          break;
        case "top-center":
          classNames.push("fs-col-top-center");
          break;
        case "top-right":
          classNames.push("fs-col-top-right");
          break;
        case "center-left":
          classNames.push("fs-col-center-left");
          break;
        case "center-center":
          classNames.push("fs-col-center-center");
          break;
        case "center-right":
          classNames.push("fs-col-center-right");
          break;
        case "bottom-left":
          classNames.push("fs-col-bottom-left");
          break;
        case "bottom-center":
          classNames.push("fs-col-bottom-center");
          break;
        case "bottom-right":
          classNames.push("fs-col-bottom-right");
          break;
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