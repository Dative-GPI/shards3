<template>
  <FSCol>
    <slot name="label">
      <FSRow :wrap="false">
        <FSSpan
          v-if="$props.label"
          class="fs-slider-label"
          font="text-overline"
          :style="style"
        >
          {{ $props.label }}
        </FSSpan>
        <FSSpan
          v-if="$props.label && $props.required"
          class="fs-slider-label"
          style="margin-left: -8px;"
          font="text-overline"
          :ellipsis="false"
          :style="style"
        >
          *
        </FSSpan>
      </FSRow>
    </slot>
    <v-slider
      class="fs-slider"
      hide-details
      :tickSize="4"
      :style="style"
      :elevation="0"
      :ripple="false"
      :disabled="!$props.editable"
      :modelValue="$props.modelValue"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
      v-bind="$attrs"
    >
      <template v-for="(_, name) in slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </v-slider>
    <slot name="description">
      <FSSpan
        v-if="$props.description"
        class="fs-slider-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
   name: "FSSlider",
   components: {
    FSSpan,
    FSCol,
    FSRow
   },
   props: {
    label: {
      type: String,
      required: true,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    modelValue: {
      type: String,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
   },
   setup(props) {
    const { color, editable } = toRefs(props);

    const colors = useColors().getColors(color.value);

    const lights = useColors().getColors(ColorEnum.Light);
    const darks = useColors().getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!editable.value) {
        return {
          "--fs-slider-cursor"     : "default",
          "--fs-slider-track-color": lights.base,
          "--fs-slider-thumb-color": lights.base,
          "--fs-slider-color"      : lights.dark
        };
      }
      return {
          "--fs-slider-cursor"     : "pointer",
          "--fs-slider-track-color": colors.light,
          "--fs-slider-thumb-color": colors.base,
          "--fs-slider-color"      : darks.base
      };
    });

    return {
      style
    };
   } 
});
</script>