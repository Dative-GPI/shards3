<template>
  <FSCol>
    <FSSelectField
      :label="label ?? $tr('ui.common.serie-type','Serie type')"
      :items="serieTypeItems"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {SerieType} from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {serieTypeLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
  },
  props: {
    modelValue: {
      type: Number as PropType<SerieType>,
      required: false
    },
    label: {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup() {
    
    const serieTypeItems = computed(()=>{
      return getEnumEntries(SerieType).map((f)=>{
        return {
          id: f.value,
          label: serieTypeLabel(f.value)
        }
      })
    });

    return {
      serieTypeItems
    }
  }
})
</script>
