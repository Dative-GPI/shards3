<template>
  <v-tabs
    class="fs-tabs"
    selectedClass="fs-tab-active"
    :grow="true"
    :style="style"
    :showArrows="true"
    :sliderColor="$props.color"
    :modelValue="$props.tab"
    @update:modelValue="(value) => $emit('update:tab', value)"
    v-bind="$attrs"
  >
    <template
      v-for="(component, index) in getChildren()"
      :key="index"
    >
      <component :is="component" />
    </template>
  </v-tabs>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
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
    const { getChildren } = useSlots();

    const textColors = computed(() => useColors().getContrasts(props.color));
    const colors = computed(() => useColors().getColors(props.color));
    const darks = useColors().getColors(ColorEnum.Dark);

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => ({
      "--fs-group-color"                 : darks.base,
      "--fs-group-hover-background-color": colors.value.light,
      "--fs-group-hover-color"           : darks.dark,
      "--fs-group-disabled-color"        : darks.light,
      "--fs-group-light"                 : colors.value.light,
      "--fs-group-base"                  : colors.value.base,
      "--fs-group-dark"                  : colors.value.dark,
      "--fs-tab-tag-background-color"    : colors.value.base,
      "--fs-tab-tag-color"               : textColors.value.light
    }));

    return {
      style,
      getChildren
    };
  }
});
</script>