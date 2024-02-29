<template>
  <v-slide-group
    class="fs-slide-group"
    :showArrows="true"
    :style="style"
    v-bind="$attrs"
  >
    <v-slide-group-item
      v-for="(component, index) in getChildren()"
      :key="index"
    >
      <component :is="component" />
    </v-slide-group-item>
  </v-slide-group>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSSlideGroup",
  props: {
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
    const { getChildren } = useSlots();
    const { getColors } = useColors();

    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-group-padding"    : typeof(props.padding) === "string" ? props.padding : `${props.padding}px`,
        "--fs-group-gap"        : `${props.gap}px`,
        "--fs-group-color"      : darks.light,
        "--fs-group-hover-color": darks.dark
      }
    });

    return {
      style,
      getChildren
    };
  }
});
</script>