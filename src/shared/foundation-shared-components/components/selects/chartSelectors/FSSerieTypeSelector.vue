<template>
  <FSAutocompleteField
    :label="label ?? $tr('ui.common.serie-type','Serie type')"
    :items="serieTypeItems"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {SerieType} from "@dative-gpi/foundation-shared-domain/enums";

import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { serieTypeLabel } from "@dative-gpi/foundation-shared-components/tools";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";


export default defineComponent({
  components: {
    FSAutocompleteField
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
      return getEnumEntries(SerieType).filter(f=>f.value != SerieType.None).map((f)=>{
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
