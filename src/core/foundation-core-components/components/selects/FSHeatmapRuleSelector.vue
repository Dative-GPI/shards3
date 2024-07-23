<template>
  <FSCol>
    <FSSelectField
      :label="$tr('ui.common.heat-rule','Heat rule')"
      :items="heatmapRuleItems"
      :modelValue="heatmapRule"
      @update:modelValue="$emit('update:heatmapRule', $event)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import {HeatmapRule} from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

import {heatmapRuleLabel, getEnumEntries} from "../../utils";

export default defineComponent({
  components: {
    FSSelectField
  },
  props: {
    heatmapRule: {
      type: Number as PropType<HeatmapRule>,
      required: false
    },
    
  },
  emits: ['update:heatmapRule'],
  setup() {

    const { $tr } = useTranslationsProvider();
    
    const heatmapRuleItems = computed(()=>{
      return getEnumEntries(HeatmapRule).map((f)=>{
        return {
          id: f.value,
          label: heatmapRuleLabel(f.value)
        }
      })
    });

    return {
      heatmapRuleItems,
      $tr
    }
  }
})
</script>
