<template>
  <FSCol
    width="hug"
  >
    <FSRow
      width="hug"
      align="center-left"
    >
      <v-switch
        class="fs-switch"
        hide-details
        inset
        :style="style"
        :ripple="false"
        :rules="$props.rules"
        :validateOn="validateOn"
        :modelValue="$props.modelValue"
        @update:modelValue="onToggle"
        v-bind="$attrs"
      />
      <slot>
        <FSSpan
            v-if="$props.label"
            class="fs-switch-label"
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
        class="fs-switch-description"
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

import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSSwitch",
  components: {
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
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
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { validateOn, blurred, getMessages } = useRules();
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);
    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | undefined } => {
      if (!props.editable) {
        return {
          "--fs-switch-translate-x": props.modelValue ? "8px" : "-8px",
          "--fs-switch-cursor"     : "default",
          "--fs-switch-track-color": props.modelValue ? colors.value.light : lights.base,
          "--fs-switch-thumb-color": backgrounds.base,
          "--fs-switch-color"      : lights.dark
        };
      }
      if (messages.value.length) {
        return {
          "--fs-switch-translate-x": props.modelValue ? "8px" : "-8px",
          "--fs-switch-cursor"     : "pointer",
          "--fs-switch-track-color": errors.base,
          "--fs-switch-thumb-color": backgrounds.base,
          "--fs-switch-color"      : darks.base
        };
      }
      return {
        "--fs-switch-translate-x": props.modelValue ? "8px" : "-8px",
        "--fs-switch-cursor"     : "pointer",
        "--fs-switch-track-color": props.modelValue ? colors.value.base : lights.dark,
        "--fs-switch-thumb-color": backgrounds.base,
        "--fs-switch-color"      : darks.base
      };
    });

    const font = computed((): string => props.modelValue ? "text-button" : "text-body");

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const onToggle = (): void => {
      if (!props.editable) {
        return;
      }
      emit("update:modelValue", !props.modelValue);
    }

    return {
      validateOn,
      messages,
      blurred,
      style,
      font,
      onToggle
    };
  }
});
</script>