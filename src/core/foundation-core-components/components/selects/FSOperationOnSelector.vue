<template>
  <FSCol>
    <FSSelectField
      :label="label ?? $tr('ui.common.operation-on','Operation on')"
      :items="operationOnItems"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {OperationOn} from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {operationOnLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
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
      return getEnumEntries(OperationOn).map((f)=>{
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
