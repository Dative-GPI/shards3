<template>
  <FSCol>
    <FSSelectField
      :label="$tr('ui.common.serie-type','Serie type')"
      :items="serieTypeItems"
      :modelValue="serieType"
      @update:modelValue="$emit('update:serieType', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import {SerieType} from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {serieTypeLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
  },
  props: {
    serieType: {
      type: Number as PropType<SerieType>,
      required: false
    },
    
  },
  emits: ['update:serieType'],
  setup() {

    const { $tr } = useTranslationsProvider();
    
    const serieTypeItems = computed(()=>{
      return getEnumEntries(SerieType).map((f)=>{
        return {
          id: f.value,
          label: serieTypeLabel(f.value)
        }
      })
    });

    return {
      serieTypeItems,
      $tr
    }
  }
})
</script>
