<template>
  <FSCol>
    <FSSelectField
      :label="label ?? $tr('ui.common.display-as','Display as')"
      :items="displayAsItems"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {DisplayAs} from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {displayAsLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
  },
  props: {
    modelValue: {
      type: Number as PropType<DisplayAs>,
      required: false
    },
    label: {
      type: String,
      required: false
    }
    
  },
  emits: ['update:modelValue'],
  setup() {
    
    const displayAsItems = computed(()=>{
      return getEnumEntries(DisplayAs).map((f)=>{
        return {
          id: f.value,
          label: displayAsLabel(f.value)
        }
      })
    });

    return {
      displayAsItems,
    }
  }
})
</script>
