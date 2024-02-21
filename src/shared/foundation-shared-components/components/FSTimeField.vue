<template>    
  <FSRow
    height="min-content"
    gap="24px"
  >
  <FSCol class="fs-time-field-number">
    <FSNumberField
      class=""
      :label="$props.labelValue"
      :description="$props.description"
      :hideHeader="$props.hideHeader"
      :required="$props.required"
      :editable="$props.editable"
      v-model="innerTime"
      @update:modelValue="onSubmit"
    />
  </FSCol>
  <FSCol class="fs-time-field-select">   
    <FSSelectField
      :label="$props.labelSelect"
      :items="$props.items"
      :multiple="false"
      :required="true"
      :clearable="false"
      :editable="$props.editable"
      :hideHeader="$props.hideHeader"
      v-model="selectedUnit.id"
      @update:modelValue="onSubmit"
    />
  </FSCol>  
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import FSNumberField from "./FSNumberField.vue";
import FSSelectField from "./FSSelectField.vue";
import FSRow from "./FSRow.vue";

const timeScale: any[] = [
  { label: "Second", id: 1 },
  { label: "Minute", id: 60 },
  { label: "Hour", id: 3600 },
  { label: "Day", id: 86400 },
  { label: "Month", id: 2592000 },
  { label: "Year", id: 31536000 }
];

function getTimeScaleIndex(secondValue: number) {
  let i = 0;
  if(secondValue === 0 || secondValue === null) return i;
  for (i; i < timeScale.length - 1; i++) {
    if (secondValue % timeScale[i].id !== 0) {
      return i-1;
    }
  }
  return i;
}

export default defineComponent({
  name: "FSTimeField",
  components: {
    FSNumberField,
    FSSelectField,
    FSRow
  },
  props: {
    labelValue: {
      type: String,
      required: false,
      default: null
    },
    labelSelect: {
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
      type: Number,
      required: false,
      default: null
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
    },
    items: {
      type: Array as PropType<any[]>,
      required: true,
      default: () => timeScale
    },
  },
  emits: ["update:modelValue", "update:selectedTimeUnit"],
  setup(props, { emit }) {

    const innerTime = ref(props.modelValue);
    const selectedUnit = ref(timeScale[0]);

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
      innerTime
    };
  }
});
</script>
