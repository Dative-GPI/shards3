<template>
  <FSCard :width="$props.size"
    :height="$props.size"
    :color="$props.backgroundColor"
    :variant="$props.backgroundColor == null ? 'background' : 'gradient'"
    :border="$props.backgroundColor == null"
    >
    <FSRow align="center-center">
      <FSIcon :size="56"
        :color="$props.iconColor"
        variant="dark">
        {{ $props.icon }}
      </FSIcon>
    </FSRow>
  </FSCard>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import FSIcon from "./FSIcon.vue";
import FSCard from "./FSCard.vue";

export default defineComponent({
  name: "FSIconCard",
  components: {
    FSIcon,
    FSCard
  },
  props: {
    size: {
      type: Number as PropType<number>,
      required: false,
      default: 100
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
  },
  setup() {

    return {
    };
  }
});
</script>