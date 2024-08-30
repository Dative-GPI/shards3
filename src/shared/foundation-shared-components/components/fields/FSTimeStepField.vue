<template>
  <FSBaseField
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :label="$props.label"
    :messages="messages"
  >
    <FSRow>
      <FSNumberField
        :validationValue="$props.modelValue"
        :editable="$props.editable"
        :validateOn="validateOn"
        :rules="$props.rules"
        :hideHeader="true"
        :messages="messages"
        :modelValue="$props.modelValue && $props.modelValue.value || 0"
        @update:modelValue="$emit('update:modelValue', { value: $event, unit: $props.modelValue && $props.modelValue.unit || units[0].id })"
        v-bind="$attrs"
      >
        <template
          v-for="(_, name) in numberSlots"
          v-slot:[name]="slotData"
        >
          <slot
            :name="name"
            v-bind="slotData"
          />
        </template>
      </FSNumberField>
      <FSSelectField
        class="fs-time-field-select"
        :editable="$props.editable"
        :hideHeader="true"
        :clearable="false"
        :items="units"
        :modelValue="$props.modelValue && $props.modelValue.unit || units[0].id"
        @update:modelValue="$emit('update:modelValue', { value: $props.modelValue && $props.modelValue.value || 0, unit: $event })"
      >
        <template
          v-for="(_, name) in selectSlots"
          v-slot:[name]="slotData"
        >
          <slot
            :name="name"
            v-bind="slotData"
          />
        </template>
      </FSSelectField>
    </FSRow>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import type { TimeUnit } from "@dative-gpi/foundation-shared-domain/models";

import { useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { timeSteps } from "@dative-gpi/foundation-shared-components/utils";

import FSNumberField from "./FSNumberField.vue";
import FSSelectField from "./FSSelectField.vue";
import FSBaseField from "./FSBaseField.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSTimeStepField",
  components: {
    FSNumberField,
    FSSelectField,
    FSBaseField,
    FSRow
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Object as PropType<{ value: number, unit: TimeUnit } | null>,
      required: true
    },
    allowedUnits: {
      type: Array as PropType<TimeUnit[]>,
      required: false,
      default: () => []
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
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { validateOn, getMessages } = useRules();
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const numberSlots = computed((): any => {
      return Object.keys(slots).filter(k => k.startsWith("number-")).reduce((acc, key) => {
        acc[key.substring("number-".length)] = slots[key];
        return acc;
      }, {});
    });

    const selectSlots = computed((): any => {
      return Object.keys(slots).filter(k => k.startsWith("select-")).reduce((acc, key) => {
        acc[key.substring("select-".length)] = slots[key];
        return acc;
      }, {});
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const units = computed(() => props.allowedUnits && props.allowedUnits.length ? timeSteps.filter(t => props.allowedUnits.includes(t.id)) : timeSteps);

    return {
      numberSlots,
      selectSlots,
      validateOn,
      messages,
      units
    };
  }
});
</script>
