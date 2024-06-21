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
        :label="$tr('ui.clock.hours', 'Hours')"
        :readonly="!$props.editable"
        :color="$props.color"
        :step="1"
        :max="23"
        :min="0"
        v-model="innerHours"
      />
      <FSSlider
        :label="$tr('ui.clock.minutes', 'Minutes')"
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
import { computed, defineComponent, PropType, ref, watch } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

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
    const { epochToLongDateFormat } = useAppTimeZone();
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const innerHours = ref(props.modelValue ? Math.floor(props.modelValue / (60 * 60 * 1000)) : 0);
    const innerMinutes = ref(props.modelValue ? Math.floor((props.modelValue % (60 * 60 * 1000)) / (60 * 1000)) : 0);

    const style = computed((): { [key: string] : string | null | undefined } => {
      if (!props.editable) {
        return {
          "--fs-clock-field-cursor"             : "default",
          "--fs-clock-field-background-color"   : backgrounds.base,
          "--fs-clock-field-border-color"       : lights.base,
          "--fs-clock-field-color"              : lights.dark,
          "--fs-clock-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-clock-field-cursor"             : "text",
        "--fs-clock-field-background-color"   : colors.value.light,
        "--fs-clock-field-border-color"       : colors.value.base,
        "--fs-clock-field-color"              : darks.base,
        "--fs-clock-field-active-border-color": colors.value.dark
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