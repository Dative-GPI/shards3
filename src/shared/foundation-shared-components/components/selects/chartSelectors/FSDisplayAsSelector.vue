<template>
  <FSAutocompleteField
    :label="label ?? $tr('ui.common.display-as','Display as')"
    :items="displayAsItems"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {DisplayAs} from "@dative-gpi/foundation-shared-domain/enums";

import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { displayAsLabel } from "@dative-gpi/foundation-shared-components/tools";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  components: {
    FSAutocompleteField
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
      return getEnumEntries(DisplayAs).filter(f=>f.value != DisplayAs.None).map((f)=>{
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
