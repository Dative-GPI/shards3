<template>    
  <FSRow
    height="fill"
  >
    <FSCol
      class="fs-time-field-number"
      >
    <FSNumberField
      class="fs-time-field-number "
      :label="$tr('ui.time-field.value', 'Value')"
      :hideHeader="$props.hideHeader"
      :required="$props.required"
      :editable="$props.editable"
      :description="$props.description"
      :clearable="false"
      v-model="innerTime"
      @update:modelValue="onSubmit"
    />  
    </FSCol>
    <FSSelectField
      class="fs-time-field-select"
      :label="$tr('ui.time-field.unit', 'Unit')"
      :items="timeScale"
      :clearable="false"
      :hideHeader="$props.hideHeader"
      :required="$props.required"
      :editable="$props.editable"
      v-model="selectedUnit.id"
      @update:modelValue="onSubmit"
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
      { label: "Minute", id: 60 },
      { label: "Hour", id: 3600 },
      { label: "Day", id: 86400 },
      { label: "Month", id: 2592000 },
      { label: "Year", id: 31536000 }
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
    }

    const bestTimeScaleIndex: number = getTimeScaleIndex(props.modelValue);

    if (bestTimeScaleIndex !== 0) {
      selectedUnit.value = timeScale[bestTimeScaleIndex];
      innerTime.value = props.modelValue / selectedUnit.value.id;
    }

    const onSubmit = (): void => {
      const result = innerTime.value * selectedUnit.value.id;
      emit("update:modelValue", result);
      console.log("Time: ", result);
    };

    return {
      onSubmit,
      selectedUnit,
      innerTime,
      timeScale
    };
  }
});
</script>
