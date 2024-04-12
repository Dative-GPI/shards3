<template>
  <FSCard
    :variant="$props.backgroundColor == null ? 'background' : 'gradient'"
    :border="$props.backgroundColor == null"
    :color="$props.backgroundColor"
    :height="$props.size"
    :width="$props.size"
  >
    <FSRow
      align="center-center"
    >
      <FSIcon 
        variant="dark"
        size="56"
        :color="$props.iconColor"
      >
        {{ $props.icon }}
      </FSIcon>
    </FSRow>
  </FSCard>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

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
    }
  }
});
</script>