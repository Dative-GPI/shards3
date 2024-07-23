<template>
  <FSCol>
    <FSSelectField
      :label="$tr('ui.common.planning-type','Planning type')"
      :items="planningTypeItems"
      :modelValue="planningType"
      @update:modelValue="$emit('update:planningType', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import {PlanningType} from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {planningTypeLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
  },
  props: {
    planningType: {
      type: Number as PropType<PlanningType>,
      required: false
    },
    
  },
  emits: ['update:planningType'],
  setup() {

    const { $tr } = useTranslationsProvider();
    
    const planningTypeItems = computed(()=>{
      return getEnumEntries(PlanningType).map((f)=>{
        return {
          id: f.value,
          label: planningTypeLabel(f.value)
        }
      })
    });

    return {
      planningTypeItems,
      $tr
    }
  }
})
</script>
