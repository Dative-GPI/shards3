<template>
  <FSCol>
    <FSSelectField
      :label="label ?? $tr('ui.common.planning-type','Planning type')"
      :items="planningTypeItems"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {PlanningType} from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {planningTypeLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
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
      return getEnumEntries(PlanningType).map((f)=>{
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
