<template>
  <FSSelectField
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

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {plotPerLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
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
      return getEnumEntries(PlotPer).map((f)=>{
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
