<template>
  <FSAutocompleteField
    :label="label ?? $tr('ui.common.data-category', 'Data category')"
    :items="toggleDataCategories"
    :modelValue="modelValue"
    :toggleSet="toggleDataCategories.length < 5"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";

import {useDataCategories} from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props:{
    modelValue: {
      type: String,
      required: false
    },
    modelId: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false
    },
  },
  emits: ['update:modelValue'],
  setup(props) {
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


    return {
      toggleDataCategories,
      dataCategories
    }
  }
})

</script>
