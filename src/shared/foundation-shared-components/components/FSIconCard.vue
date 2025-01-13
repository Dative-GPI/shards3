<template>
  <FSCard
    :variant="$props.backgroundVariant"
    :color="$props.backgroundColor"
    :border="$props.border"
    :height="$props.size"
    :width="$props.size"
  >
    <FSRow
      align="center-center"
    >
      <FSIcon
        :variant="$props.iconVariant"
        :color="contrastedIconColor"
        :size="actualIconSize"
      >
        {{ $props.icon }}
      </FSIcon>
    </FSRow>
  </FSCard>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from "vue";

import { ColorEnum, type ColorBase } from "@dative-gpi/foundation-shared-components/models";

import { sizeToVar } from "../utils";
import { useColors } from "../composables";

import FSCard from "./FSCard.vue";
import FSIcon from "./FSIcon.vue";

export default defineComponent({
  name: "FSIconCard",
  components: {
    FSCard,
    FSIcon
  },
  props: {
    size: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    backgroundColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: null
    },
    backgroundVariant: {
      type: String as PropType<"background" | "standard" | "full" | "gradient">,
      required: false,
      default: "background"
    },
    icon: {
      type: String as PropType<string>,
      required: false,
      default: "mdi-shape"
    },
    iconColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    iconVariant: {
      type: String as PropType<"base" | "baseContrast" | "soft" | "softContrast" | "light" | "lightContrast" | "dark" | "darkContrast">,
      required: false,
      default: "base"
    },
    iconSize: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    border: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props){
    const { getColors } = useColors();
    
    const colors = computed(() => {
      return Array.isArray(props.backgroundColor) 
        ? getColors(props.backgroundColor[Math.floor(props.backgroundColor.length/2)]) 
        : getColors(props.backgroundColor)
    });

    const actualIconSize = computed(() => {
      if (props.iconSize){
        return props.iconSize;
      }
      else if (props.size) {
        return `calc(${sizeToVar(props.size)} * 0.42)`;
      }
      return "42px";
    });

    const contrastedIconColor = computed(() => {
      switch (props.backgroundVariant) {
        case "standard":
          switch (props.iconColor) {
            case ColorEnum.Dark :
            case ColorEnum.Light:
            default: return colors.value.lightContrast!
          };
        case "background": return colors.value.base
        default: return colors.value.baseContrast!
      }
    });

    return {
      contrastedIconColor,
      actualIconSize
    };
  }
});
</script>