<template>
  <FSRow
    class="fs-pagination"
    align="center-center"
    :width="$props.width"
    :gap="$props.gap"
    :style="style"
  >
    <div
      v-for="(_, index) in $props.pages"
      :class="classes(index)"
      :style="style"
      :key="index"
    />
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSPagination",
  components: {
    FSRow
  },
  props: {
    width: {
      type: [String, Number],
      required: false,
      default: null
    },
    gap: {
      type: [String, Number],
      required: false,
      default: 4
    },
    pages: {
      type: Number,
      required: false,
      default: 1
    },
    modelValue: {
      type: Number,
      required: false,
      default: 0
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      switch (props.color) {
        case ColorEnum.Light:
        case ColorEnum.Dark: return {
          "--fs-pagination-page-width"             : `calc(100% / ${props.pages} - ${sizeToVar(props.gap)}`,
          "--fs-pagination-background-color"       : lights.dark,
          "--fs-pagination-active-background-color": darks.base
        }
        default: return {
          "--fs-pagination-page-width"             : `calc(100% / ${props.pages} - ${sizeToVar(props.gap)}`,
          "--fs-pagination-background-color"       : colors.value.light,
          "--fs-pagination-active-background-color": colors.value.base
        }
      }
    });

    const classes = (page: number): string[] => {
      const innerClasses = ["fs-pagination-page"];
      if (page <= props.modelValue) {
        innerClasses.push("fs-pagination-active-page");
      }
      return innerClasses;
    };

    return {
      style,
      classes
    };
  }
});
</script>