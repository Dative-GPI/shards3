<template>    
  <FSRow height="fill">
    <FSCol class="fs-time-field-number">
      <FSNumberField
        class="fs-time-field-number"
        :label="$tr('ui.time-field.value', 'Value')"
        :hideHeader="$props.hideHeader"
        :required="$props.required"
        :editable="$props.editable"
        :description="$props.description"
        :clearable="false"
        :modelValue="innerTime"
        @update:modelValue="onSubmitValue"
      />  
    </FSCol>
    <FSSelectField
      class="fs-time-field-select"
      :label="$tr('ui.time-field.time-unit', 'Time Unit')"
      :items="timeScale"
      :clearable="false"
      :hideHeader="$props.hideHeader"
      :required="$props.required"
      :editable="$props.editable"
      :modelValue="selectedUnit.id"
      @update:modelValue="onSubmitTimeScale"
    />
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services";

import FSNumberField from "./FSNumberField.vue";
import FSSelectField from "./FSSelectField.vue";
import FSRow from "./FSRow.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSTimeField",
  components: {
    FSNumberField,
    FSSelectField,
    FSRow,
    FSCol
  },
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: ""
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
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
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { $tr } = useTranslationsProvider();

    const timeScale: any[] = [
      { label: $tr("ui.time-field.second", "Second"), id: 1 },
      { label: $tr("ui.time-field.minute", "Minute"), id: 60 },
      { label: $tr("ui.time-field.hour", "Hour"), id: 3600 },
      { label: $tr("ui.time-field.day", "Day"), id: 86400 },
      { label: $tr("ui.time-field.month", "Month"), id: 2592000 },
      { label: $tr("ui.time-field.year", "Year"), id: 31536000 }
    ];

    const innerTime = ref(props.modelValue);
    const selectedUnit = ref(timeScale[0]);

    const getTimeScaleIndex = (secondValue: number): number => {
      let i = 0;
      if(secondValue === 0 || secondValue === null) return i;
      for (i; i < timeScale.length - 1; i++) {
        if (secondValue % timeScale[i].id !== 0) {
          return i-1;
        }
      }
      return i;
    };

    const bestTimeScaleIndex: number = getTimeScaleIndex(props.modelValue);

    if (bestTimeScaleIndex !== 0) {
      selectedUnit.value = timeScale[bestTimeScaleIndex];
      innerTime.value = props.modelValue / selectedUnit.value.id;
    }

    const onSubmitValue = (value: number): void => {
      innerTime.value = value;
      emit("update:modelValue", innerTime.value * selectedUnit.value.id);
    };

    const onSubmitTimeScale = (value: number): void => {
      selectedUnit.value = timeScale.find((item) => item.id === value);
      emit("update:modelValue", innerTime.value * selectedUnit.value.id);
    };

    return {
      onSubmitValue,
      onSubmitTimeScale,
      innerTime,
      selectedUnit,
      timeScale
    };
  }
});
</script>
