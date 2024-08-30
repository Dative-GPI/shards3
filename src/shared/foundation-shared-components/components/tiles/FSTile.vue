<template>
  <FSClickable
    v-if="$props.singleSelect"
    class="fs-tile"
    padding="12px"
    :variant="variant"
    :height="height"
    :color="color"
    :style="style"
    @click="() => $emit('update:modelValue', !$props.modelValue)"
    v-bind="$attrs"
  >
    <slot />
    <div
      v-if="$props.bottomColor"
      class="fs-tile-bottom"
      :style="style"
    />
  </FSClickable>
  <FSClickable
    v-else-if="$props.href || $props.to || $attrs.onClick"
    variant="background"
    class="fs-tile"
    padding="12px"
    :color="ColorEnum.Background"
    :href="$props.href"
    :height="height"
    :to="$props.to"
    :style="style"
    v-bind="$attrs"
  >
    <slot />
    <FSCard
      v-if="$props.editable"
      class="fs-tile-checkbox"
      variant="background"
      :color="ColorEnum.Background"
      :border="false"
      v-bind="$attrs"
    >
      <FSCheckbox
        :modelValue="$props.modelValue"
        @update:modelValue="() => $emit('update:modelValue', !$props.modelValue)"
      />
    </FSCard>
    <div
      class="fs-tile-bottom"
      :style="style"
    />
  </FSClickable>
  <FSCard
    v-else
    variant="background"
    class="fs-tile"
    padding="12px"
    :color="color"
    :style="style"
    :height="height"
    v-bind="$attrs"
  >
    <slot />
    <FSCard
      v-if="$props.editable"
      class="fs-tile-checkbox"
      variant="background"
      :border="false"
      v-bind="$attrs"
    >
      <FSCheckbox
        :modelValue="$props.modelValue"
        @update:modelValue="() => $emit('update:modelValue', !$props.modelValue)"
      />
    </FSCard>
    <div
      v-if="$props.bottomColor"
      class="fs-tile-bottom"
      :style="style"
    />
  </FSCard>  
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";
import { type RouteLocation } from "vue-router";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum, type ColorBase } from "@dative-gpi/foundation-shared-components/models";

import FSClickable from "../FSClickable.vue";
import FSCheckbox from "../FSCheckbox.vue";
import FSCard from "../FSCard.vue";

export default defineComponent({
  name: "FSTile",
  components: {
    FSClickable,
    FSCheckbox,
    FSCard
  },
  props: {
    to: {
      type: [String, Object] as PropType<string | RouteLocation | null>,
      required: false,
      default: null
    },
    href: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    activeColor: {
      type: [Array, String] as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    bottomColor: {
      type: [Array, String] as PropType<ColorBase[] | ColorBase | null>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: false
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { isMobileSized } = useBreakpoints();
    const { getGradients } = useColors();

    const style = computed((): StyleValue => {
      if (props.bottomColor) {
        const bottomColors = getGradients(props.bottomColor);
        return {
          "--fs-tile-border-color": bottomColors.base
        };
      }
      return {};
    });

    const height = computed((): number => {
      return isMobileSized.value ? 156 : 170;
    });

    const variant = computed((): "standard" | "background" => {
      return (props.singleSelect && props.modelValue) ? "standard" : "background";
    });

    const color = computed((): ColorBase => {
      return (props.singleSelect && props.modelValue) ? props.activeColor : ColorEnum.Background;
    });

    return {
      ColorEnum,
      variant,
      height,
      color,
      style
    };
  }
});
</script>