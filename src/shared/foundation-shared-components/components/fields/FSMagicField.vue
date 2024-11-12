<template>
  <component
    v-if="!$props.useOnlyAllowedValues"
    :is="get($props.type)"
    :modelValue="valueToInput"
    @update:modelValue="inputToValue"
    v-bind="$attrs"
  />
  <FSSelectField
    v-else
    itemValue="value"
    :items="items"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      v-if="$props.type === MagicFieldType.IconField"
      #selection="{ item }"
    >
      <FSRow
        align="center-center"
        :wrap="false"
      >
        <FSIcon
          v-if="item.raw.value"
        >
          {{ item.raw.value }}
        </FSIcon>
        <FSSpan
          v-if="item.raw.value !== item.raw.label"
        >
          {{ item.raw.label }}
        </FSSpan>
      </FSRow>
    </template>
    <template
      v-if="$props.type === MagicFieldType.IconField"
      #item-label="{ item }"
    >
      <FSRow
        align="center-center"
        :wrap="false"
      >
        <FSIcon
          v-if="item.raw.value"
        >
          {{ item.raw.value }}
        </FSIcon>
        <FSSpan
          v-if="item.raw.value !== item.raw.label"
        >
          {{ item.raw.label }}
        </FSSpan>
      </FSRow>
    </template>
  </FSSelectField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import { useMagicFieldProvider } from "../../composables";
import { MagicFieldType } from "../../models/magicFields";
import { getTimeBestString, timeStepToString } from "../../utils";

import FSSelectField from "./FSSelectField.vue";
import FSIcon from "../FSIcon.vue";
import FSSpan from "../FSSpan.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSMagicField",
  components: {
    FSSelectField,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    type: {
      type: Number as PropType<MagicFieldType>,
      required: false,
      default: MagicFieldType.TextField
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    allowedValues: {
      type: Array as PropType<{ value: string; label: string }[]>,
      required: false,
      default: () => []
    },
    useOnlyAllowedValues: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { epochToShortTimeFormat } = useDateFormat();
    const { $tr } = useTranslationsProvider();
    const { get } = useMagicFieldProvider();

    const items = computed(() => props.allowedValues.map((av) => ({
      value: av.value,
      label: av.label || asString(av.value),
    })));

    const valueToInput = computed((): any => {
      if (props.modelValue == null) {
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

    const asString = (value: string): string | null => {
      if (value == null) {
        return "";
      }
      
      switch (props.type) {
        case MagicFieldType.NumberField:
          return value.toString();
        case MagicFieldType.Switch:
          if (value) {
            return $tr("magic-field.true", "True");
          }
          return $tr("magic-field.false", "False");
        case MagicFieldType.DateTimeField:
          return epochToShortTimeFormat(parseFloat(value));
        case MagicFieldType.TimeField:
          return getTimeBestString(parseFloat(value));
        case MagicFieldType.TimeStepField:
          return timeStepToString(JSON.parse(value));
        default:
          return value;
      }
    }

    const inputToValue = (value: any) => {
      if (value == null) {
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
      items,
      inputToValue,
      get
    };
  },
});
</script>