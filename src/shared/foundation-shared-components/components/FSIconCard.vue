<template>
  <FSCard
    :color="$props.backgroundColor"
    :height="$props.size"
    :width="$props.size"
    :variant="variant"
    :border="border"
  >
    <FSRow
      align="center-center"
    >
      <FSIcon 
        variant="dark"
        :size="$props.iconSize"
        :color="$props.iconColor"
      >
        {{ $props.icon }}
      </FSIcon>
    </FSRow>
  </FSCard>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";

import type { ColorBase} from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

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
    icon: {
      type: String as PropType<string>,
      required: false,
      default: "mdi-shape"
    },
    iconColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    iconSize: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "56px"
    }
  },
  setup(props) {
    const variant = computed((): "background" | "gradient" => {
      switch (props.backgroundColor) {
        case ColorEnum.Background: return "background";
        default:                   return "gradient";
      }
    });

    const border = computed((): boolean => {
      switch (props.backgroundColor) {
        case ColorEnum.Background: return true;
        default:                   return false;
      }
    });

    return {
      variant,
      border
    };
  }
});
</script>