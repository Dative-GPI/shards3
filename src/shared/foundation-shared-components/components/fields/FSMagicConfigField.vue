<template>
  <FSRow>
    <component
      class="fs-magic-config-field-value"
      :is="get($props.type)"
      :label="$tr('ui.magic-config-field.value', 'Value')"
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
        :label="$tr('ui.magic-config-field.label', 'Label')"
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

import { DateRules, IconRules, NumberRules, TextRules, TimeRules, TimeStepRules } from "../../models";
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
    value: {
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
  emits: ["click:remove", "click:add", "update:value", "update:labelDefault", "update:translations"],
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
      }
      return [];
    });

    const valueToInput = computed((): any => {
      switch (props.type) {
        case MagicFieldType.NumberField:
        case MagicFieldType.DateTimeField:
        case MagicFieldType.TimeField:
          if (props.value == null || isNaN(parseFloat(props.value))) {
            return null;
          }
          return parseFloat(props.value);
        case MagicFieldType.Switch: 
          if (props.value == null) {
            return null;
          }
          return props.value === "true";
        default:
          return props.value;
      }
    });

    const inputToValue = (value: any) => {
      switch (props.type) {
        case MagicFieldType.NumberField:
        case MagicFieldType.Switch: 
        case MagicFieldType.DateTimeField:
        case MagicFieldType.TimeField:
          if (value == null) {
            emit("update:value", null);
            break;
          }
          emit("update:value", value.toString());
          break;
        default:
          emit("update:value", value);
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