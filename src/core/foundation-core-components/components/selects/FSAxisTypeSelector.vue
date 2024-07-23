<template>
  <FSCol>
    <FSToggleSet
      :hideHeader="true"
      :values="axisTypeItems"
      :modelValue="axisType"
      @update:modelValue="$emit('update:axisType', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import  {AxisType} from "@dative-gpi/foundation-core-domain/models";

import {axisTypeLabel, getEnumEntries} from "../../utils";

import FSToggleSet from "@dative-gpi/foundation-shared-components/components/FSToggleSet.vue";


export default defineComponent({
  components: {
    FSToggleSet
  },
  props: {
    axisType: {
      type: Number as PropType<AxisType>,
      required: false
    },
    
  },
  emits: ['update:axisType'],
  setup() {

    const { $tr } = useTranslationsProvider();

    const axisTypeItems = computed(()=>{
      return getEnumEntries(AxisType).map((f)=>{
        return {
          id: f.value,
          label: axisTypeLabel(f.value)
        }
      })
    });

    return {
      axisTypeItems,
      $tr
    }
  }
})
</script>
