<template>
  <FSSelectField
    :label="label ?? $tr('ui.common.heat-rule','Heat rule')"
    :items="heatmapRuleItems"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {HeatmapRule} from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {heatmapRuleLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
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
      return getEnumEntries(HeatmapRule).map((f)=>{
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
