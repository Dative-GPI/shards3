<template>
  <v-skeleton-loader
    class="fs-loader"
    type="image"
    :style="style"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

export default defineComponent({
  name: "FSLoader",
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "0"
    },
    variant: {
      type: String as PropType<"standard" | "button" | "input" | "field" | "chip" | "text-h1" | "text-h2" | "text-h3" | "text-body" | "text-button" | "text-overline">,
      required: false,
      default: "standard"
    },
    borderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    }
  },
  setup(props) {
    const { isMobileSized } = useBreakpoints();
    const { getColors } = useColors();

    const backgrounds = getColors(ColorEnum.Background);

    const style = computed((): StyleValue => ({
      "--fs-loader-background-color": backgrounds.base,
      "--fs-loader-border-radius"   : ["chip"].includes(props.variant) ? "50px" : sizeToVar(props.borderRadius),
      "--fs-loader-padding"         : sizeToVar(getPadding.value),
      "--fs-loader-height"          : sizeToVar(getHeight.value),
      "--fs-loader-width"           : sizeToVar(getWidth.value)
    }));

    const getHeight = computed((): string | number => {
      switch (props.variant) {
        case "standard"      : return sizeToVar(props.height);
        case "button"        :
        case "input"         :
        case "field"         : return isMobileSized.value ? "36px" : "40px";
        case "chip"          : return isMobileSized.value ? "20px" : "24px";

        case "text-h1"       : return isMobileSized.value ? "28px" : "36px";
        case "text-h2"       : return isMobileSized.value ? "22px" : "26px";
        case "text-h3"       : return isMobileSized.value ? "16px" : "20px";
        case "text-body"     :
        case "text-button"   : return isMobileSized.value ? "12px" : "14px";
        case "text-overline" : return isMobileSized.value ? "10px" : "12px";
      }
    });

    const getWidth = computed((): string | number => {
      if (props.width != null) {
        return sizeToVar(props.width);
      }
      switch (props.variant) {
        case "standard": return sizeToVar(props.width);
        case "button"  : return isMobileSized.value ? "36px" : "40px";
        case "input"   : return isMobileSized.value ? "calc(50% - 124px)" : "calc(50% - 132px)";
        case "field"   : return "100%";
        case "chip"    : return "8vw";
        case "text-h1" : return "calc(50% - 32px)";
        case "text-h2" : return "calc(60% - 32px)";
        case "text-h3" : return "calc(65% - 32px)";
        default        : return "calc(75% - 32px)";
      }
    });

    const getPadding = computed((): string | number => {
      if (props.padding !== "0") {
        return sizeToVar(props.padding);
      }
      switch (props.variant) {
        case "text-h1"       : return "2px 0";
        case "text-h2"       : return isMobileSized.value ? "1px 0" : "3px 0";
        case "text-h3"       : return "2px 0";
        case "text-body"     :
        case "text-button"   : return isMobileSized.value ? "2px 0" : "3px 0";;
        case "text-overline" : return isMobileSized.value ? "3px 0" : "2px 0";
        default              : return sizeToVar(props.padding);
      }
    });

    return {
      style
    };
  }
});
</script>