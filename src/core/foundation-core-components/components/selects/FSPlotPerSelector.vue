<template>
  <FSCol>
    <FSSelectField
      :label="$tr('ui.common.plot-per','Plot per')"
      :items="plotPerItems"
      :modelValue="plotPer"
      @update:modelValue="$emit('update:plotPer', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import {PlotPer} from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {plotPerLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
  },
  props: {
    plotPer: {
      type: Number as PropType<PlotPer>,
      required: false
    },
    
  },
  emits: ['update:plotPer'],
  setup() {

    const { $tr } = useTranslationsProvider();
    
    const plotPerItems = computed(()=>{
      return getEnumEntries(PlotPer).map((f)=>{
        return {
          id: f.value,
          label: plotPerLabel(f.value)
        }
      })
    });

    return {
      plotPerItems,
      $tr
    }
  }
})
</script>
