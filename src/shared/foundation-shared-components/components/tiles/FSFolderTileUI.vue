<template>
  <FSSimpleTileUI
    :iconBackgroundColor="true"
    :bottomColor="color"
    :icon="$props.icon"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";

import type { ColorBase} from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSimpleTileUI from "./FSSimpleTileUI.vue";

export default defineComponent({
  name: "FSFolderTileUI",
  props: {
    bottomColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: () => [ColorEnum.Light, ColorEnum.Primary]
    },
    icon: {
      type: String,
      required: false,
      default: "mdi-folder-outline"
    }
  },
  components: {
    FSSimpleTileUI
  },
  setup(props){
    const color = computed(() => {
      if(Array.isArray(props.bottomColor) && !props.bottomColor.length) {
        return [ColorEnum.Light, ColorEnum.Primary];
      }
      return props.bottomColor;
    });

    return {
      color
    }
  }
});
</script>