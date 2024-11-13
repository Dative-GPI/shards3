<template>
  <FSAutocompleteField
    :label="label ?? $tr('autocomplete.heat-rule.label','Heat rule')"
    :items="heatmapRuleItems"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {HeatmapRule} from "@dative-gpi/foundation-shared-domain/enums";

import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { heatmapRuleLabel } from "@dative-gpi/foundation-shared-components/tools";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";


export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props: {
    modelValue: {
      type: Number as PropType<HeatmapRule>,
      required: false
    },
    label: {
      type: String,
      required: false
    }
    
  },
  emits: ['update:modelValue'],
  setup() {
    
    const heatmapRuleItems = computed(()=>{
      return getEnumEntries(HeatmapRule).filter(f=>f.value != HeatmapRule.None).map((f)=>{
        return {
          id: f.value,
          label: heatmapRuleLabel(f.value)
        }
      })
    });

    return {
      heatmapRuleItems
    }
  }
})
</script>
