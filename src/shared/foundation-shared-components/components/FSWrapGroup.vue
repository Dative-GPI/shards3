<template>
  <v-slide-group
    class="fs-wrap-group"
    :style="style"
    v-bind="$attrs"
  >
    <FSRow>
      <v-slide-group-item
        v-for="(component, index) in getChildren()"
        :key="index"
      >
        <component
          :is="component"
          v-bind="{ color, colors, style }"
        />
      </v-slide-group-item>
    </FSRow>
  </v-slide-group>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useColors, useDefaultSlot } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSWrapGroup",
  components: {
    FSRow
  },
  props: {
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    }
  },
  setup(props) {
    const { color } = toRefs(props);

    const { getChildren } = useDefaultSlot();

    const colors = useColors().getColors(color.value);
    const darks = useColors().getColors(ColorEnum.Dark);

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-group-color"                 : darks.base,
        "--fs-group-hover-background-color": colors.light,
        "--fs-group-hover-color"           : darks.dark,
        "--fs-group-disabled-color"        : darks.light,
        "--fs-group-light"                 : colors.light,
        "--fs-group-base"                  : colors.base,
        "--fs-group-dark"                  : colors.dark
      }
    });

    return {
      getChildren,
      color,
      colors,
      style
    };
  }
});
</script>