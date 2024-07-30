<template>
  <v-tabs
    selectedClass="fs-tab-active"
    class="fs-tabs"
    :sliderColor="$props.color"
    :showArrows="true"
    :style="style"
    :grow="true"
    :modelValue="$props.tab"
    @update:modelValue="$emit('update:tab', $event)"
    v-bind="$attrs"
  >
    <slot/>
  </v-tabs>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

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
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | null | undefined } => ({
      "--fs-group-color"                 : darks.soft,
      "--fs-group-hover-color"           : darks.dark,
      "--fs-tab-border-color"            : lights.dark,
      "--fs-tab-hover-border-color"      : darks.dark,
      "--fs-tab-active-background-color" : colors.value.light,
      "--fs-tab-tag-background-color"    : colors.value.base,
      "--fs-tab-tag-color"               : colors.value.baseContrast
    }));

    return {
      style
    };
  }
});
</script>