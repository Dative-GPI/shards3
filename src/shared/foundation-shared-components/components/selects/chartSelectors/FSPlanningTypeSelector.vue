<template>
  <FSAutocompleteField
    :label="label ?? $tr('autocomplete.planning-type.label','Planning type')"
    :items="planningTypeItems"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {PlanningType} from "@dative-gpi/foundation-shared-domain/enums";

import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { planningTypeLabel } from "@dative-gpi/foundation-shared-components/tools";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";


export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props: {
    modelValue: {
      type: Number as PropType<PlanningType>,
      required: false
    },
    label: {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup() {
    
    const planningTypeItems = computed(()=>{
      return getEnumEntries(PlanningType).filter(f=>f.value != PlanningType.None).map((f)=>{
        return {
          id: f.value,
          label: planningTypeLabel(f.value)
        }
      })
    });

    return {
      planningTypeItems
    }
  }
})
</script>
