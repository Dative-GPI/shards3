<template>
  <FSRow
      align="center-center"
    >
    <FSRow>
    <FSSelectField
      class="fs-time-slot-field-select"
      :items="daysObject"
      :hideHeader="true"
      :required="required"
      :editable="editable"
      :clearable="false"
      :modelValue="daysObject.find((item) => item.id === $props.modelValue[0][0])"
      @update:modelValue="onChangeDayStart"
    />
    <FSClock
      class="fs-time-slot-field-number"
      :reminder="false"
      color="light"
      :slider="false"
      :editable="editable"
      :modelValue="$props.modelValue[0][1]"
      @update:modelValue="onChangeHourStart"
    />
  </FSRow>

    {{$tr("ui.time-slot-field.to", "To")}}
  <FSRow>
    <FSSelectField
      class="fs-time-slot-field-select"
      :items="daysObject"
      :hideHeader="true"
      :required="required"
      :editable="editable && $props.modelValue[0][0] !== 7"
      :clearable="false"
      :modelValue="($props.modelValue[0][0] !== 7 ? daysObject.find((item) => item.id === $props.modelValue[1][0]) : daysObject[7])"
      @update:modelValue="onChangeDayEnd"
    />
    <FSClock
      class="fs-time-slot-field-number"
      :reminder="false"
      color="light"
      :slider="false"
      :editable="editable"
      :modelValue="$props.modelValue[1][1]"
      @update:modelValue="onChangeHourEnd"
    />
  </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services/composables";

import FSClock from "./FSClock.vue";
import FSSelectField from "./FSSelectField.vue";
import FSRow from "./FSRow.vue";
import { Days } from "@dative-gpi/foundation-core-domain";

export default defineComponent({
  name: "FSTimeSlotField",
  components: {
    FSClock,
    FSSelectField,
    FSRow
},
  props: {
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Format of the time slot [[dayStart (id), timeStart (in ms)], [dayEnd (id), timeEnd (in ms)]]
     */
    modelValue: {
      type: Array as PropType<number[][]>,
      required: true,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { $tr } = useTranslationsProvider();
    const daysObject = Object.keys(Days).reduce((acc, key) => {
      if(isNaN(Number(key))){
        acc.push({
          id: Days[key],
          label: key
        });
      }
      return acc;
    }, []);

    const onChangeDayStart = (value: number) => {
      emit("update:modelValue", [[value, props.modelValue[0][0]], props.modelValue[1]]);
    };

    const onChangeHourStart = (value: number) => {
      emit("update:modelValue", [[props.modelValue[0][1], value], props.modelValue[1]]);
    };

    const onChangeDayEnd = (value: number) => {
      emit("update:modelValue", [props.modelValue[0], [value, props.modelValue[1][1]]]);
    };

    const onChangeHourEnd = (value: number) => {
      emit("update:modelValue", [props.modelValue[0], [props.modelValue[1][0], value]]);
    };

    return {
      $tr,
      onChangeDayStart,
      onChangeHourStart,
      onChangeDayEnd,
      onChangeHourEnd,
      daysObject
    };
  }
});
</script>