<template>
  <FSCol>
    <FSSelectField
      :label="tr('ui.common.aggregation-type','Aggregation')"
      :items="aggregationTypeItems"
      :modelValue="aggregationType"
      @update:modelValue="$emit('update:aggregationType', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import {AggregationType} from "@dative-gpi/foundation-core-domain/models";

import {aggregationTypeLabel, getEnumEntries} from "../../utils";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

export default defineComponent({
  components: {
    FSSelectField
  },
  props: {
    aggregationType: {
      type: Number as PropType<AggregationType>,
      required: false
    },
    
  },
  emits: ['update:aggregationType'],
  setup() {

    const { $tr } = useTranslationsProvider();

    const aggregationTypeItems = computed(()=>{
      return getEnumEntries(AggregationType).map((f)=>{
        return {
          id: f.value,
          label: aggregationTypeLabel(f.value)
        }
      })
    });

    return {
      aggregationTypeItems,
      tr : $tr 
    }
  }
})
</script>
