<template>
  <FSSimpleTileUI
    :bottomColor="color"
    :icon="$props.icon"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSimpleTileUI from "./FSSimpleTileUI.vue";

export default defineComponent({
  name: "FSDashboardOrganisationTypeTileUI",
  components: {
    FSSimpleTileUI
  },
  props: {
    bottomColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: ColorEnum.Primary
    },
    icon: {
      type: String,
      required: false,
      default: "mdi-view-dashboard"
    }
  },
  setup(props){
    const color = computed(() => {
      if(Array.isArray(props.bottomColor) && !props.bottomColor.length) {
        return ColorEnum.Primary;
      }
      return props.bottomColor;
    });

    return {
      color
    };
  }
});
</script>