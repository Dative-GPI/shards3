<template>
  <FSAutocompleteField
    :label="label"
    :items="toggleDataDefinitions"
    :modelValue="dataDefinitionId"
    @update:modelValue="$emit('update:dataDefinitionId', $event)"
  />
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import {useDataDefinitions} from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props:{
    dataDefinitionId: {
      type: String,
      required: false
    },
    modelId: {
      type: String,
      required: false,
    },
    dataCategoryId: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    
  },
  emits: ['update:dataDefinitionId', 'update:dataDefinition'],
  setup(props, {emit}) {
    const { $tr } = useTranslationsProvider();
    const {getMany : fetchDataDefinitions, entities : dataDefinitions} = useDataDefinitions()

    const toggleDataDefinitions = computed(()=>{
      return dataDefinitions.value.map((d) => {
        return {
          id: d.id,
          label: d.label
        }
      })
    })

    watch(() => [props.modelId, props.dataCategoryId], async () => {
      await fetchDataDefinitions({modelsIds: props.modelId ? [props.modelId] : undefined, dataCategoryId: props.dataCategoryId})
    }, {immediate: true})

    watch(() => [props.dataDefinitionId, dataDefinitions.value], () => {
      if(dataDefinitions.value){
        emit('update:dataDefinition', dataDefinitions.value.find((d) => d.id === props.dataDefinitionId))
      }
    }, {immediate: true})

    return {
      toggleDataDefinitions,
      dataDefinitions,
      $tr
    }
  }
})

</script>
