<template>
  <FSSelectField
    :label="label ?? $tr('ui.common.aggregation-type','Aggregation')"
    :items="aggregationTypeItems"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {AggregationType} from "@dative-gpi/foundation-core-domain/models";

import {aggregationTypeLabel, getEnumEntries} from "../../utils";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

export default defineComponent({
  components: {
    FSSelectField
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
      return getEnumEntries(AggregationType).map((f)=>{
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
