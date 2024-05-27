<template>
  <div
    v-if="isEmpty && !vertical"
    class="fs-divider-horizontal"
    :style="style"
  />
  <div
    v-else-if="isEmpty && vertical"
    class="fs-divider-vertical"
    :style="style"
  />
  <FSRow
    v-else
    align="center-center"
    gap="24px"
  >
    <FSCol
      class="fs-divider-around"
      :style="style"
    />
    <FSText
      variant="light"
      :font="$props.font"
    >
      <slot>
        {{ $props.label }}
      </slot>
    </FSText>
    <FSCol
      class="fs-divider-around"
      :style="style"
    />
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSText from "./FSText.vue";

export default defineComponent({
  name: "FSDivider",
  components: {
    FSText
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    size: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "100%"
    },
    font: {
      type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-h4" | "text-body" | "text-button" | "text-overline" | "text-underline">,
      required: false,
      default: "text-body"
    },
    variant: {
      type: String as PropType<"base" | "light" | "dark">,
      required: false,
      default: "dark"
    },
    vertical: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    }
  },
  setup(props) {
    const { getColors } = useColors();
    const { slots } = useSlots();

    const colors = computed(() => getColors(props.color));

    const style = computed((): { [key: string] : string | null | undefined } => {
      switch (props.variant) {
        case "base": return {
          "--fs-divider-size" : sizeToVar(props.size),
          "--fs-divider-color": colors.value.base
        };
        case "light": return {
          "--fs-divider-size" : sizeToVar(props.size),
          "--fs-divider-color": colors.value.light
        };
        case "dark": return {
          "--fs-divider-size" : sizeToVar(props.size),
          "--fs-divider-color": colors.value.dark
        };
      }
    });

    const isEmpty = computed(() => {
      return !slots.default && !props.label;
    });

    return {
      style,
      isEmpty
    };
  }
});
</script>