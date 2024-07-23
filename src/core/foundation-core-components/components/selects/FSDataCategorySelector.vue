<template>
  <FSAutocompleteField
    :label="$tr('ui.common.data-category', 'Data category')"
    :items="toggleDataCategories"
    :modelValue="dataCategoryId"
    :toggleSet="toggleDataCategories.length < 5"
    @update:modelValue="$emit('update:dataCategoryId', $event);"
  />
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import {useDataCategories} from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props:{
    dataCategoryId: {
      type: String,
      required: false
    },
    modelId: {
      type: String,
      required: false,
    },
    
  },
  emits: ['update:dataCategoryId', 'update:dataCategory'],
  setup(props, {emit}) {
    const { $tr } = useTranslationsProvider();
    const {getMany : fetchdataCategories, entities : dataCategories} = useDataCategories()

    const toggleDataCategories = computed(()=>{
      return dataCategories.value.map((d) => {
        return {
          id: d.id,
          label: d.label
        }
      })
    })

    watch(() => props.modelId, () => {
      fetchdataCategories({modelId: props.modelId})
    }, {immediate: true})

    watch(() => [props.dataCategoryId, dataCategories.value], () => {
      if(dataCategories.value){
        emit('update:dataCategory', dataCategories.value.find((d) => d.id === props.dataCategoryId))
      }
    }, {immediate: true})


    return {
      toggleDataCategories,
      dataCategories,
      $tr
    }
  }
})

</script>
