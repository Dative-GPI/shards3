<template>
  <FSCol
    width="hug"
  >
    <FSRow
      width="hug"
      align="center-left"
    >
      <FSIcon
        class="fs-checkbox"
        size="l"
        :style="style"
        @click.stop="onToggle"
      >
        {{ icon }}
      </FSIcon>
      <slot>
        <FSSpan
          v-if="$props.label"
          class="fs-checkbox-label"
          :style="style"
          :font="font"
          @click.stop="onToggle"
        >
          {{ $props.label }}
        </FSSpan>
      </slot>
    </FSRow>
    <slot name="description">
      <FSSpan
        v-if="$props.description"
        class="fs-checkbox-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSCheckbox",
  components: {
    FSIcon,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    indeterminate: {
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
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-checkbox-cursor"        : "default",
          "--fs-checkbox-checkbox-color": lights.dark,
          "--fs-checkbox-color"         : lights.dark
        };
      }
      return {
        "--fs-checkbox-cursor"        : "pointer",
        "--fs-checkbox-checkbox-color": (props.modelValue || props.indeterminate) ? colors.value.base : darks.base,
        "--fs-checkbox-color"         : darks.base
      }
    });

    const icon = computed((): string => props.modelValue ? "mdi-checkbox-marked" : props.indeterminate ? "mdi-minus-box" : "mdi-checkbox-blank-outline");

    const font = computed((): string => props.modelValue ? "text-button" : "text-body");

    const onToggle = (): void => {
      if (!props.editable) {
        return;
      }
      emit("update:modelValue", !props.modelValue);
    };

    return {
      style,
      icon,
      font,
      onToggle
    };
  }
});
</script>