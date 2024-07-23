<template>
  <FSCol>
    <FSSelectField
      :label="$tr('ui.common.operation-on','Operation on')"
      :items="operationOnItems"
      :modelValue="operationOn"
      @update:modelValue="$emit('update:operationOn', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import {OperationOn} from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {operationOnLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
  },
  props: {
    operationOn: {
      type: Number as PropType<OperationOn>,
      required: false
    },
    
  },
  emits: ['update:operationOn'],
  setup() {

    const { $tr } = useTranslationsProvider();
    
    const operationOnItems = computed(()=>{
      return getEnumEntries(OperationOn).map((f)=>{
        return {
          id: f.value,
          label: operationOnLabel(f.value)
        }
      })
    });

    return {
      operationOnItems,
      $tr
    }
  }
})
</script>
