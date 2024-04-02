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
      v-for="component in getChildren()"
    >
      <component
        :is="component"
      />
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
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | undefined } => ({
      "--fs-group-color"                 : darks.base,
      "--fs-group-disabled-color"        : darks.light,
      "--fs-group-hover-background-color": colors.value.light,
      "--fs-group-hover-color"           : darks.dark,
      "--fs-group-light"                 : colors.value.light,
      "--fs-group-base"                  : colors.value.base,
      "--fs-group-dark"                  : colors.value.dark,
      "--fs-tab-tag-background-color"    : colors.value.base,
      "--fs-tab-tag-color"               : colors.value.baseContrast
    }));

    return {
      style,
      getChildren
    };
  }
});
</script>