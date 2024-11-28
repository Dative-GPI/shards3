<template>
  <FSRow
    class="fs-magic-config-field"
  >
    <component
      class="fs-magic-config-field-value"
      :is="get($props.type)"
      :label="$tr('ui.common.value', 'Value')"
      :editable="$props.editable"
      :required="true"
      :rules="rules"
      :modelValue="valueToInput"
      @update:modelValue="inputToValue"
    />
    <FSRow
      gap="24px"
    >
      <FSTranslateField
        :label="$tr('ui.common.label', 'Label')"
        :editable="$props.editable"
        :modelValue="$props.labelDefault"
        :translations="$props.translations"
        @update:modelValue="$emit('update:labelDefault', $event)"
        @update:translations="$emit('update:translations', $event)"
      />
      <FSRow
        class="fs-magic-config-field-actions"
        width="hug"
        :wrap="false"
      >
        <FSButtonRemoveIcon
          @click="$emit('click:remove')"
        />
        <FSButtonAddIcon
          @click="$emit('click:add')"
        />
      </FSRow>
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { DateRules, IconRules, NumberRules, TextRules, TimeRules, TimeStepRules, AutocompleteRules } from "../../models";
import { useMagicFieldProvider } from "../../composables";
import { MagicFieldType } from "../../models/magicFields";

import FSButtonRemoveIcon from "../buttons/FSButtonRemoveIcon.vue";
import FSButtonAddIcon from "../buttons/FSButtonAddIcon.vue";
import FSTranslateField from "./FSTranslateField.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSMagicConfigField",
  components: {
    FSButtonRemoveIcon,
    FSTranslateField,
    FSButtonAddIcon,
    FSRow
  },
  props: {
    type: {
      type: Number as PropType<MagicFieldType>,
      required: false,
      default: MagicFieldType.TextField
    },
    labelDefault: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    translations: {
      type: Array as PropType<{ languageCode: string; label: string }[]>,
      required: false,
      default: () => []
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["click:remove", "click:add", "update:modelValue", "update:labelDefault", "update:translations"],
  setup(props, { emit }) {
    const { get } = useMagicFieldProvider();

    const rules = computed((): Function[] => {
      switch (props.type) {
        case MagicFieldType.NumberField:
          return [NumberRules.required()];
        case MagicFieldType.TextField:
          return [TextRules.required()];
        case MagicFieldType.DateTimeField:
          return [DateRules.required()];
        case MagicFieldType.IconField:
          return [IconRules.required()];
        case MagicFieldType.TimeField:
          return [TimeRules.required()];
        case MagicFieldType.TimeStepField:
          return [TimeStepRules.required()];
        case MagicFieldType.PlotPerField:
          return [AutocompleteRules.required()];
      }
      return [];
    });

    const valueToInput = computed((): any => {
      if (!props.modelValue) {
        return null;
      }

      switch (props.type) {
        case MagicFieldType.NumberField:
        case MagicFieldType.DateTimeField:
        case MagicFieldType.TimeField:
          if (isNaN(parseFloat(props.modelValue))) {
            return null;
          }
          return parseFloat(props.modelValue);
        case MagicFieldType.Switch: 
          return props.modelValue === "true";
        case MagicFieldType.TimeStepField:
          return JSON.parse(props.modelValue);
        case MagicFieldType.PlotPerField:
          return parseInt(props.modelValue);
        default:
          return props.modelValue;
      }
    });

    const inputToValue = (value: any) => {
      if (!value) {
        emit("update:modelValue", null);
      }

      switch (props.type) {
        case MagicFieldType.NumberField:
        case MagicFieldType.Switch: 
        case MagicFieldType.DateTimeField:
        case MagicFieldType.TimeField:
          emit("update:modelValue", value.toString());
          break;
        case MagicFieldType.TimeStepField:
          emit("update:modelValue", JSON.stringify(value));
          break;
        case MagicFieldType.PlotPerField:
          emit("update:modelValue", value.toString());
          break;
        default:
          emit("update:modelValue", value);
          break;
      }
    };

    return {
      MagicFieldType,
      valueToInput,
      rules,
      inputToValue,
      get
    };
  },
});
</script>