<template>
  <FSSimpleIconTileUI
    :bottomColor="color"
    :icon="$props.icon"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSimpleIconTileUI from "./FSSimpleIconTileUI.vue";

export default defineComponent({
  name: "FSDashboardOrganisationTypeTileUI",
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
  components: {
    FSSimpleIconTileUI
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
    }
  }
});
</script>