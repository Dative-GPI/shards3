<template>
  <FSCol>
    <FSAutocompleteField
      :label="$tr('ui.common.filter-type','Filter type')"
      :toggleSet="true"
      :items="filterTypeItems"
      :modelValue="filterType"
      @update:modelValue="$emit('update:filterType', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import {FilterType} from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

import {filterTypeLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props: {
    filterType: {
      type: Number as PropType<FilterType>,
      required: false,
      default : FilterType.None
    },
    
  },
  emits: ['update:filterType'],
  setup() {

    const { $tr } = useTranslationsProvider();

    const filterTypeItems = computed(()=>{
      return getEnumEntries(FilterType).map((f)=>{
        return {
          id: f.value,
          label: filterTypeLabel(f.value)
        }
      })
    });

    return {
      filterTypeItems,
      $tr
    }
  }
})
</script>
