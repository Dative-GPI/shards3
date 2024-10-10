<template>
  <FSToggleSet
    :hideHeader="true"
    :values="axisTypeItems"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import  {AxisType} from "@dative-gpi/foundation-shared-domain/enums";

import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { axisTypeLabel } from "@dative-gpi/foundation-shared-components/tools";

import FSToggleSet from "@dative-gpi/foundation-shared-components/components/FSToggleSet.vue";


export default defineComponent({
  components: {
    FSToggleSet
  },
  props: {
    modelValue: {
      type: Number as PropType<AxisType>,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup() {

    const axisTypeItems = computed(()=>{
      return getEnumEntries(AxisType).map((f)=>{
        return {
          id: f.value,
          label: axisTypeLabel(f.value)
        }
      })
    });

    return {
      axisTypeItems
    }
  }
})
</script>
