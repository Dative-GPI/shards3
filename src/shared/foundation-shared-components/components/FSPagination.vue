<template>
  <FSRow
    align="center-center"
    gap="4px"
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

import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSPagination",
  components: {
    FSRow
  },
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: 0
    },
    pages: {
      type: Number,
      required: false,
      default: 1
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    }
  },
  setup(props) {
    const colors = computed(() => useColors().getColors(props.color));
    const lights = useColors().getColors(ColorEnum.Light);
    const darks = useColors().getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      switch (props.color) {
        case ColorEnum.Light:
        case ColorEnum.Dark: return {
          "--fs-pagination-background-color": lights.dark,
          "--fs-pagination-active-background-color": darks.base
        }
        default: return {
          "--fs-pagination-background-color": colors.value.light,
          "--fs-pagination-active-background-color": colors.value.base
        }
      }
    });

    const classes = (page: number): string[] => {
      const innerClasses = ["fs-pagination"];
      if (page === props.modelValue) {
        innerClasses.push("fs-pagination-active");
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