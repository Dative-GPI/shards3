<template>
  <v-tabs
    class="fs-tabs"
    selectedClass="fs-tab-active"
    :grow="true"
    :style="style"
    :showArrows="true"
    :sliderColor="colors.base"
    :modelValue="tab"
    @update:modelValue="(v) => $emit('update:tab', v)"
    v-bind="$attrs"
  >
    <template
      v-for="(component, index) in getChildren()"
      :key="index"
    >
      <component
        :is="component"
        v-bind="{ color, colors, style }"
      />
    </template>
  </v-tabs>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, toRefs } from "vue";

import { useColors, useDefaultSlot } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSTabs",
  props: {
    tab: {
      type: Number,
      required: false,
      default: 0
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    }
  },
  setup(props) {
    const { tab, color } = toRefs(props);

    const { getChildren } = useDefaultSlot();

    const textColors = useColors().getContrasts(color.value);
    const colors = useColors().getColors(color.value);
    const darks = useColors().getColors(ColorEnum.Dark);

    const style: Ref<{ [code: string]: string } & Partial<CSSStyleDeclaration>> = ref({
      "--fs-group-color"                 : darks.base,
      "--fs-group-hover-background-color": colors.light,
      "--fs-group-hover-color"           : darks.dark,
      "--fs-group-disabled-color"        : darks.light,
      "--fs-group-light"                 : colors.light,
      "--fs-group-base"                  : colors.base,
      "--fs-group-dark"                  : colors.dark,
      "--fs-tab-tag-background-color"    : colors.base,
      "--fs-tab-tag-color"               : textColors.light
    });

    return {
      getChildren,
      tab,
      color,
      colors,
      style
    };
  }
});
</script>