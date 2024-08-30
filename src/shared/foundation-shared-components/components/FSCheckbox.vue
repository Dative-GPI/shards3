<template>
  <FSCol
    width="hug"
  >
    <v-checkbox
      class="fs-stopclick"
      hide-details
      :ripple="false"
      :rules="$props.rules"
      :validateOn="validateOn"
      :modelValue="$props.modelValue"
      @click.prevent.stop="onToggle"
      v-bind="$attrs"
    >
      <template
        #input
      >
        <FSRow
          class="fs-checkbox-label"
          align="center-left"
          width="hug"
          :style="style"
        >
          <FSIcon
            class="fs-checkbox"
            size="l"
            :style="style"
          >
            {{ icon }}
          </FSIcon>
          <slot
            name="label"
            v-bind="{ font }"
          >
            <FSSpan
              v-if="$props.label"
              :style="style"
              :font="font"
            >
              {{ $props.label }}
            </FSSpan>
          </slot>
        </FSRow>
      </template>
    </v-checkbox>
    <slot
      name="description"
    >
      <FSSpan
        v-if="$props.description"
        class="fs-checkbox-description"
        font="text-overline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";

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
    indeterminate: {
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
    const { validateOn, getMessages } = useRules();
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => {
      if (!props.editable) {
        return {
          "--fs-checkbox-cursor"        : "default",
          "--fs-checkbox-checkbox-color": (props.modelValue || props.indeterminate) ? colors.value.light : lights.base,
          "--fs-checkbox-color"         : lights.dark
        };
      }
      if (messages.value.length) {
        return {
          "--fs-checkbox-cursor"        : "pointer",
          "--fs-checkbox-checkbox-color": errors.base,
          "--fs-checkbox-color"         : darks.base
        }
      }
      return {
        "--fs-checkbox-cursor"        : "pointer",
        "--fs-checkbox-checkbox-color": (props.modelValue || props.indeterminate) ? colors.value.base : darks.base,
        "--fs-checkbox-color"         : darks.base
      }
    });

    const icon = computed((): string => props.modelValue ? "mdi-checkbox-marked" : props.indeterminate ? "mdi-minus-box" : "mdi-checkbox-blank-outline");

    const font = computed((): "text-button" | "text-body" => props.modelValue ? "text-button" : "text-body");

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const onToggle = (): void => {
      if (!props.editable) {
        return;
      }
      emit("update:modelValue", !props.modelValue);
    };

    return {
      validateOn,
      messages,
      style,
      icon,
      font,
      onToggle
    };
  }
});
</script>