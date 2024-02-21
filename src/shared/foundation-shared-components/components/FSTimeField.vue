<template>    
  <FSRow
    height="fill"
    gap="24px"
  >
    <FSNumberField
      class="fs-time-field"
      label="Valeur"
      :description="$props.description"
      :hideHeader="$props.hideHeader"
      :required="$props.required"
      :editable="$props.editable"
      v-model="innerTime"
    />     
    <FSSelectField
      label="Unité de temps écoulée"
      :items="$props.items"
      :multiple="false"
      :required="true"
      :clearable="false"
      :editable="$props.editable"
      v-model="selectedUnit.id"
    />
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import FSNumberField from "./FSNumberField.vue";
import FSSelectField from "./FSSelectField.vue";
import FSRow from "./FSRow.vue";

const timeScale = [
  { label: "Second", id: 1 },
  { label: "Minute", id: 60 },
  { label: "Hour", id: 3600 },
  { label: "Day", id: 86400 },
  { label: "Month", id: 2592000 },
  { label: "Year", id: 31536000 }
];

function getTimeScaleIndex(secondValue: number) {
  let i = 0;
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
    label: {
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
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
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

    const errors = useColors().getColors(ColorEnum.Error);
    const lights = useColors().getColors(ColorEnum.Light);
    const darks = useColors().getColors(ColorEnum.Dark);

    const innerTime = ref(props.modelValue);
    const selectedUnit = ref(timeScale[0]); // Initial value

    // Mise à jour de selectedUnit et innerTime lors de l'initialisation
    const bestTimeScaleIndex: number = getTimeScaleIndex(props.modelValue);
    if (bestTimeScaleIndex !== 0) {
      selectedUnit.value = timeScale[bestTimeScaleIndex];
      innerTime.value = props.modelValue / selectedUnit.value.id;
    }

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-time-field-color": lights.dark
        };
      }
      return {
        "--fs-time-field-color": darks.base,
        "--fs-time-field-error-color": errors.base
      };
    });

    const onSubmit = (): void => {
      const result = innerTime.value * selectedUnit.value.id;
      emit("update:modelValue", result);
    };

    return {
      ColorEnum,
      style,
      onSubmit,
      selectedUnit, // Renvoyer selectedUnit pour qu'il puisse être utilisé dans le template
      innerTime // Renvoyer innerTime pour qu'il puisse être utilisé dans le template
    };
  }
});
</script>
