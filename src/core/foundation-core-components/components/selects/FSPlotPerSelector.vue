<template>
  <FSAutocompleteField
    :label="label ?? $tr('ui.common.plot-per','Plot per')"
    :items="plotPerItems"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {PlotPer} from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

import {plotPerLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props: {
    modelValue: {
      type: Number as PropType<PlotPer>,
      required: false
    },
    label: {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup() {
    
    const plotPerItems = computed(()=>{
      return getEnumEntries(PlotPer).filter(f=>f.value != PlotPer.None).map((f)=>{
        return {
          id: f.value,
          label: plotPerLabel(f.value)
        }
      })
    });

    return {
      plotPerItems
    }
  }
})
</script>
