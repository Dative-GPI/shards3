<template>
  <FSCol>
    <FSSelectField
      :label="$tr('ui.common.display-as','Display as')"
      :items="displayAsItems"
      :modelValue="displayAs"
      @update:modelValue="$emit('update:displayAs', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import {DisplayAs} from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {displayAsLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
  },
  props: {
    displayAs: {
      type: Number as PropType<DisplayAs>,
      required: false
    },
    
  },
  emits: ['update:displayAs'],
  setup() {

    const { $tr } = useTranslationsProvider();
    
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
      $tr
    }
  }
})
</script>
