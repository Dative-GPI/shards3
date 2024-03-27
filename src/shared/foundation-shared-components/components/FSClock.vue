<template>
  <FSCol
    width="fill"
    gap="16px"
  >
    <FSRow
      align="center-center"
      :wrap="false"
    >
      <FSText
        v-if="$props.reminder"
      >
        {{ epochToLongDateFormat($props.date) }}
      </FSText>
      <v-spacer v-if="$props.reminder" />
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
    </FSCol>
    <FSCol
      v-if="$props.slider"
    >
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
import FSText from "./FSText.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSClock",
  components: {
    FSSlider,
    FSText,
    FSCol,
    FSRow
  },
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    date: {
      type: Number,
      required: false,
      default: null
    },
    reminder: {
      type: Boolean,
      required: false,
      default: false
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

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
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

    const onChangeHours = (value: number): void => {
      value = Math.min(23, Math.max(0, value));
      innerHours.value = value;
    };

    const onChangeMinutes = (value: number): void => {
      value = Math.min(59, Math.max(0, value));
      innerMinutes.value = value;
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