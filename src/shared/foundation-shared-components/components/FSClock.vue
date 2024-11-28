<template>
  <FSCol>
    <FSRow
      align="center-center"
      :wrap="false"
    >
      <v-text-field
        class="fs-clock-field"
        variant="outlined"
        type="number"
        hide-details
        :style="style"
        :readonly="!$props.editable"
        :modelValue="innerHours.toString().padStart(2, '0')"
        @update:modelValue="onChangeHours"
      />
      :
      <v-text-field
        class="fs-clock-field"
        variant="outlined"
        type="number"
        hide-details
        :style="style"
        :readonly="!$props.editable"
        :modelValue="innerMinutes.toString().padStart(2, '0')"
        @update:modelValue="onChangeMinutes"
      />
    </FSRow>
    <FSCol
      v-if="$props.slider"
    >
      <FSSlider
        :label="$tr('ui.common.hours', 'Hours')"
        :readonly="!$props.editable"
        :color="$props.color"
        :step="1"
        :max="23"
        :min="0"
        v-model="innerHours"
      />
      <FSSlider
        :label="$tr('ui.common.minutes', 'Minutes')"
        :readonly="!$props.editable"
        :color="$props.color"
        :step="1"
        :max="59"
        :min="0"
        v-model="innerMinutes"
      />
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, type StyleValue, watch } from "vue";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import FSSlider from "./FSSlider.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSClock",
  components: {
    FSSlider,
    FSCol,
    FSRow
  },
  props: {
    modelValue: {
      type: Number as PropType<number | null>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    date: {
      type: Number as PropType<number | null>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    slider: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { epochToLongDateFormat } = useDateFormat();
    const { isMobileSized } = useBreakpoints();
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const innerHours = ref(0);
    const innerMinutes = ref(0);

    const style = computed((): StyleValue => {
      if (!props.editable) {
        return {
          "--fs-clock-field-cursor"             : "default",
          "--fs-clock-field-background-color"   : backgrounds.base,
          "--fs-clock-field-border-color"       : lights.base,
          "--fs-clock-field-color"              : lights.dark,
          "--fs-clock-field-active-border-color": lights.base,
          "--fs-font-font-size"                 : isMobileSized.value ? "12px" : "14px",
          "--fs-font-line-height"               : isMobileSized.value ? "16px" : "20px",
          "--fs-font-letter-spacing"            : isMobileSized.value ? "-0.36px" : "-0.42px",
          "--fs-base-field-input-height"        : isMobileSized.value ? "34px" : "38px"
        };
      }
      return {
        "--fs-clock-field-cursor"             : "text",
        "--fs-clock-field-background-color"   : colors.value.light,
        "--fs-clock-field-border-color"       : colors.value.base,
        "--fs-clock-field-color"              : darks.base,
        "--fs-clock-field-active-border-color": colors.value.dark,
        "--fs-font-font-size"                 : isMobileSized.value ? "12px" : "14px",
        "--fs-font-line-height"               : isMobileSized.value ? "16px" : "20px",
        "--fs-font-letter-spacing"            : isMobileSized.value ? "-0.36px" : "-0.42px",
        "--fs-base-field-input-height"        : isMobileSized.value ? "34px" : "38px"
      };
    });

    const onChangeHours = (value: string): void => {
      let number = parseInt(value);
      if (isNaN(number) || !isFinite(number)) {
        return;
      }
      number = Math.min(23, Math.max(0, number));
      innerHours.value = number;
    };

    const onChangeMinutes = (value: string): void => {
      let number = parseInt(value);
      if (isNaN(number) || !isFinite(number)) {
        return;
      }
      number = Math.min(59, Math.max(0, number));
      innerMinutes.value = number;
    };

    const reset = (): void => {
      innerHours.value = props.modelValue ? Math.floor(props.modelValue / (60 * 60 * 1000)) : 0;
      innerMinutes.value = props.modelValue ? Math.floor((props.modelValue % (60 * 60 * 1000)) / (60 * 1000)) : 0;
    };

    watch(() => props.modelValue, () => {
      if (
        innerHours.value !== (props.modelValue ? Math.floor(props.modelValue / (60 * 60 * 1000)) : 0) ||
        innerMinutes.value !== (props.modelValue ? Math.floor((props.modelValue % (60 * 60 * 1000)) / (60 * 1000)) : 0)
      ) {
        reset();
      }
    }, { immediate: true });

    watch([innerHours, innerMinutes], () => {
      emit("update:modelValue", (innerHours.value * 60 * 60 * 1000) + (innerMinutes.value * 60 * 1000));
    });

    return {
      style,
      innerHours,
      innerMinutes,
      onChangeHours,
      onChangeMinutes,
      epochToLongDateFormat
    };
  }
});
</script>