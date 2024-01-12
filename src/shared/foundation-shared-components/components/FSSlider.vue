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
      :ripple="false"
      :style="style"
      :elevation="0"
      no-details
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

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

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
      default: ColorBase.Dark
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

    const errors = useColors().getColors(ColorBase.Error);
    const lights = useColors().getColors(ColorBase.Light);
    const darks = useColors().getColors(ColorBase.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!editable.value) {
        return {
          "--fs-text-field-cursor"             : "default",
          "--fs-text-field-border-color"       : lights.base,
          "--fs-text-field-color"              : lights.dark,
          "--fs-text-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-text-field-cursor"             : "text",
        "--fs-text-field-border-color"       : colors.base,
        "--fs-text-field-color"              : darks.base,
        "--fs-text-field-active-border-color": colors.dark,
        "--fs-text-field-error-color"        : errors.base,
        "--fs-text-field-error-border-color" : errors.base
      };
    });

    return {
      style
    };
   } 
});
</script>