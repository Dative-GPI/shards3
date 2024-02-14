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

export default defineComponent({
  name: "FSRow",
  props: {
    width: {
      type: String as PropType<"hug" | "fill" | string>,
      required: false,
      default: "fill"
    },
    height: {
      type: String as PropType<"hug" | "fill" | string>,
      required: false,
      default: "hug"
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
    },
    padding: {
      type: [String, Number],
      required: false,
      default: 0
    },
    gap: {
      type: Number,
      required: false,
      default: 8
    }
  },
  setup(props) {
    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => ({
      "--fs-row-padding"  : typeof(props.padding) === "string" ? props.padding : `${props.padding}px`,
      "--fs-row-flex-wrap": props.wrap ? "wrap" : "nowrap",
      "--fs-row-gap"      : `${props.gap}px`,
      "--fs-row-width"    : props.width,
      "--fs-row-height"   : props.height
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