<template>
  <FSAutocompleteField
    :label="label ?? $tr('autocomplete.aggregation.label','Aggregation')"
    :items="aggregationTypeItems"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { AggregationType } from "@dative-gpi/foundation-shared-domain/enums";

import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { aggregationTypeLabel } from "@dative-gpi/foundation-shared-components/tools";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props: {
    modelValue : {
      type: Number as PropType<AggregationType>,
      required: false
    },
    label : {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup() {

    const aggregationTypeItems = computed(()=>{
      return getEnumEntries(AggregationType).filter(f=>f.value != AggregationType.None).map((f)=>{
        return {
          id: f.value,
          label: aggregationTypeLabel(f.value)
        }
      })
    });

    return {
      aggregationTypeItems
    }
  }
})
</script>
