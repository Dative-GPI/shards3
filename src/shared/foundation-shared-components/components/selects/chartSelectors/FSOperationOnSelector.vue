<template>
  <FSAutocompleteField
    :label="label ?? $tr('autocomplete.operation-on.label','Operation on')"
    :items="operationOnItems"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {OperationOn} from "@dative-gpi/foundation-shared-domain/enums";

import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { operationOnLabel} from "@dative-gpi/foundation-shared-components/tools";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";


export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props: {
    modelValue: {
      type: Number as PropType<OperationOn>,
      required: false
    },
    label : {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup() {
    
    const operationOnItems = computed(()=>{
      return getEnumEntries(OperationOn).filter(f=>f.value != OperationOn.None).map((f)=>{
        return {
          id: f.value,
          label: operationOnLabel(f.value)
        }
      })
    });

    return {
      operationOnItems
    }
  }
})
</script>
