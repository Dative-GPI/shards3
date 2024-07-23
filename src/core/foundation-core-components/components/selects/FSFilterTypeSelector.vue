<template>
  <FSCol>
    <FSAutocompleteField
      :label="label ?? $tr('ui.common.filter-type','Filter type')"
      :toggleSet="true"
      :items="filterTypeItems"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {FilterType} from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

import {filterTypeLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props: {
    modelValue: {
      type: Number as PropType<FilterType>,
      required: false,
      default : FilterType.None
    },
    label: {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup() {

    const filterTypeItems = computed(()=>{
      return getEnumEntries(FilterType).map((f)=>{
        return {
          id: f.value,
          label: filterTypeLabel(f.value)
        }
      })
    });

    return {
      filterTypeItems
    }
  }
})
</script>
