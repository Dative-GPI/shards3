<template>
  <FSRow
    class="fs-color"
    :width="$props.width"
    :height="$props.height"
    :align="$props.align"
    :wrap="$props.wrap"
    :gap="$props.gap"
    :style="style"
  >
    <slot v-bind="{ color: $props.color, colors }" />
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, Ref } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSColor",
  components: {
    FSRow
  },
  props: {
    width: {
      type: String as PropType<"hug" | "fill" | string>,
      required: false,
      default: "hug"
    },
    height: {
      type: String as PropType<"hug" | "fill" | string>,
      required: false,
      default: "hug"
    },
    align: {
      type: String as PropType<"top-left" | "top-center" | "top-right" | "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right">,
      required: false,
      default: "center-left"
    },
    wrap: {
      type: Boolean,
      required: false,
      default: true
    },
    gap: {
      type: [String, Number],
      required: false,
      default: "8px"
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
      "--fs-color-color"           : colors.value.base,
      "--fs-color-light"           : colors.value.light,
      "--fs-color-base"            : colors.value.base,
      "--fs-color-dark"            : colors.value.dark
    });

    return {
      colors,
      style
    };
  }
});
</script>