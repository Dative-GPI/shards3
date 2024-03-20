<template>
  <FSCard
    :border="$props.border"
    :class="classes"
    :style="style"
    v-bind="$attrs"
  >
    <slot v-bind="{ color: $props.color, colors }" />
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, Ref } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSCard from "./FSCard.vue";

export default defineComponent({
  name: "FSColor",
  components: {
    FSCard
  },
  props: {
    border: {
      type: Boolean,
      required: false,
      default: true
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

    const style: Ref<{ [code: string]: string } & Partial<CSSStyleDeclaration>> = ref({
      "--fs-color-background-color": colors.value.light,
      "--fs-color-border-color"    : colors.value.lightContrast,
      "--fs-color-color"           : colors.value.lightContrast,
      "--fs-color-light"           : colors.value.light,
      "--fs-color-base"            : colors.value.base,
      "--fs-color-dark"            : colors.value.dark
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-color"];
      if (props.border) {
        classNames.push("fs-color-border");
      }
      return classNames;
    });

    return {
      classes,
      colors,
      style
    };
  }
});
</script>