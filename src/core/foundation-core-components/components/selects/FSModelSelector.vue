<template>
  <FSAutocompleteField
    :label="$tr('ui.common.model', 'Model')"
    :items="modelItems"
    :toggleSet="modelItems.length < 5"
    :modelValue="modelId"
    @update:modelValue="$emit('update:modelId', $event)"
  />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import {useModels} from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props:{
    modelId: {
      type: String,
      required: false
    },
    
  },
  emits: ['update:modelId'],
  setup(){
    const { $tr } = useTranslationsProvider();
    const {getMany : fetchModels, entities : models} = useModels()

    const modelItems = computed(()=>{
      return models.value.map((d) => {
        return {
          id: d.id,
          label: d.label
        }
      })
    })

    onMounted(() => {
      fetchModels()
    })

    return {
      modelItems,
      $tr
    }
  }
})

</script>
