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
import { computed, defineComponent, PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import { useMagicFieldProvider } from "../../composables";
import { MagicFieldType } from "../../models/magicFields";
import { getTimeBestString } from "../../utils";

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
    const { epochToShortTimeFormat } = useAppTimeZone();
    const { $tr } = useTranslationsProvider();
    const { get } = useMagicFieldProvider();

    const items = computed(() => props.allowedValues.map((av) => ({
      value: av.value,
      label: av.label || asString(av.value),
    })));

    const valueToInput = computed((): any => {
      switch (props.type) {
        case MagicFieldType.NumberField:
        case MagicFieldType.DateTimeField:
        case MagicFieldType.TimeField:
          if (props.modelValue == null || isNaN(parseFloat(props.modelValue))) {
            return null;
          }
          return parseFloat(props.modelValue);
        case MagicFieldType.Switch: 
          if (props.modelValue == null) {
            return null;
          }
          return props.modelValue === "true";
        default:
          return props.modelValue;
      }
    });

    const asString = (value: any): string | null => {
      if (value == null) {
        return null;
      }
      switch (props.type) {
        case MagicFieldType.NumberField:
          return value.toString();
        case MagicFieldType.Switch:
          if (value) {
            return $tr("ui.magic-field.true", "True");
          }
          return $tr("ui.magic-field.false", "False");
        case MagicFieldType.DateTimeField:
          return epochToShortTimeFormat(value);
        case MagicFieldType.TimeField:
          return getTimeBestString(value);
        default:
          return value;
      }
    }

    const inputToValue = (value: any) => {
      switch (props.type) {
        case MagicFieldType.NumberField:
        case MagicFieldType.Switch: 
        case MagicFieldType.DateTimeField:
        case MagicFieldType.TimeField:
          if (value == null) {
            emit("update:modelValue", null);
            break;
          }
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