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
import { computed, defineComponent, PropType, toRefs } from "vue";

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
    const { width, height, align, wrap, padding, gap } = toRefs(props);
    
    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => ({
      "--fs-row-padding"  : typeof(padding.value) === "string" ? padding.value : `${padding.value}px`,
      "--fs-row-flex-wrap": wrap.value ? "wrap" : "nowrap",
      "--fs-row-gap"      : `${gap.value}px`,
      "--fs-row-width"    : width.value,
      "--fs-row-height"   : height.value
    }));

    const classes = computed((): string[] => {
      const classes = ["fs-row"];
      switch (width.value) {
        case "hug":
          classes.push("fs-row-width-hug");
          break;
        case "fill":
          classes.push("fs-row-width-fill");
          break;
        default: 
          classes.push("fs-row-width-fixed");
          break;
      }
      switch (height.value) {
        case "hug":
          classes.push("fs-row-height-hug");
          break;
        case "fill":
          classes.push("fs-row-height-fill");
          break;
        default: 
          classes.push("fs-row-height-fixed");
          break;
      }
      switch (align.value) {
        case "top-left":
          classes.push("fs-row-top-left");
          break;
        case "top-center":
          classes.push("fs-row-top-center");
          break;
        case "top-right":
          classes.push("fs-row-top-right");
          break;
        case "center-left":
          classes.push("fs-row-center-left");
          break;
        case "center-center":
          classes.push("fs-row-center-center");
          break;
        case "center-right":
          classes.push("fs-row-center-right");
          break;
        case "bottom-left":
          classes.push("fs-row-bottom-left");
          break;
        case "bottom-center":
          classes.push("fs-row-bottom-center");
          break;
        case "bottom-right":
          classes.push("fs-row-bottom-right");
          break;
      }
      return classes;
    });

    return {
      style,
      classes
    };
  }
});
</script>