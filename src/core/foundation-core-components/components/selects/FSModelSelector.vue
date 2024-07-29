<template>
  <FSAutocompleteField
    :label="label ?? $tr('ui.common.model', 'Model')"
    :items="modelItems"
    :toggleSet="modelItems.length < 5"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";

import {useModels} from "@dative-gpi/foundation-core-services/composables";

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
    label: {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup(){
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
    }
  }
})

</script>
