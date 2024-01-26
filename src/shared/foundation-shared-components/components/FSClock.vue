<template>
  <FSCol width="hug">
    <FSSlider
      :color="$props.buttonColor"
      :step="1"
      :max="23"
      :min="0"
      :modelValue="hour"
      @update:modelValue="onChangeHour"
    />
    <FSSlider
      :color="$props.buttonColor"
      :step="1"
      :max="59"
      :min="0"
      :modelValue="minute"
      @update:modelValue="onChangeMinute"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
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
      type: Array as PropType<Array<number>>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    buttonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { modelValue, color, buttonColor } = toRefs(props);

    const colors = useColors().getColors(color.value);
    const buttonColors = useColors().getColors(buttonColor.value);

    const hour = computed((): number => {
      if (modelValue.value != null && modelValue.value[0] != null) {
        return modelValue.value[0];
      }
      else {
        return 0;
      }
    });

    const minute = computed((): number => {
      if (modelValue.value != null && modelValue.value[1] != null) {
        return modelValue.value[1];
      }
      else {
        return 0;
      }
    });

    const onChangeHour = (value: number): void => {
      if (modelValue.value != null && modelValue.value[1] != null) {
        emit("update:modelValue", [value, modelValue.value[1]]);
      }
      else {
        emit("update:modelValue", [value, 0]);
      }
    };

    const onChangeMinute = (value: number): void => {
      if (modelValue.value != null && modelValue.value[0] != null) {
        emit("update:modelValue", [modelValue.value[0], value]);
      }
      else {
        emit("update:modelValue", [0, value]);
      }
    };

    return {
      hour,
      minute,
      onChangeHour,
      onChangeMinute
    };
  }
});
</script>