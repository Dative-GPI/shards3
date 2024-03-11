<template>
  <v-skeleton-loader
    class="fs-loader"
    type="image"
    :style="style"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

export default defineComponent({
  name: "FSLoader",
  props: {
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number>,
      required: false,
      default: null
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number>,
      required: false,
      default: null
    },
    borderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    },
    variant: {
      type: String as PropType<"standard" | "button" | "input" | "chip" | "text-h1" | "text-h2" | "text-h3" | "text-h4" | "text-body" | "text-button" | "text-overline" | "text-underline">,
      required: false,
      default: "standard"
    }
  },
  setup(props) {
    const { isMobileSized, isExtraSmall } = useBreakpoints();

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-loader-border-radius": ["chip"].includes(props.variant) ? "50px" : sizeToVar(props.borderRadius),
        "--fs-loader-height": sizeToVar(getHeight.value),
        "--fs-loader-width" : sizeToVar(getWidth.value)
      };
    });

    const getHeight = computed((): string | number => {
      switch (props.variant) {
        case "standard":       return sizeToVar(props.height);
        case "button": 
        case "input":          return isMobileSized.value ? "36px" : "40px";
        case "chip":           return isMobileSized.value ? "20px" : "24px";
        case "text-h1":        return isMobileSized.value ? "29px" : "36px";
        case "text-h2":        return isMobileSized.value ? "22px" : "27px";
        case "text-h3":        return isMobileSized.value ? "17px" : "21px";
        case "text-h4":        return isMobileSized.value ? "14px" : "16px";
        case "text-body":
        case "text-button":    return isMobileSized.value ? "12px" : "14px";
        case "text-overline":
        case "text-underline": return isMobileSized.value ? "10px" : "12px";
      }
    });

    const getWidth = computed((): string | number => {
      switch (props.variant) {
        case "standard": return sizeToVar(props.width);
        case "button":   return isMobileSized ? "36px" : "40px";
        case "input":    return isMobileSized ? "calc(50% - 124px)" : "calc(50% - 132px)";
        case "chip":     return "8vw";
        case "text-h1":  return "calc(50% - 32px)";
        case "text-h2":  return "calc(60% - 32px)";
        case "text-h3":  return "calc(65% - 32px)";
        default:         return "calc(75% - 32px)";
      }
    });

    return {
      style
    };
  }
});
</script>