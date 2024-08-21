<template>
  <FSAutocompleteField
    :width="$props.width ? $props.width : '100%'"
    :label="label ?? $tr('ui.common.data-definition', 'Data')"
    :items="toggleDataDefinitions"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #autocomplete-selection="{item}"
    >
      <FSRow
        :wrap="false"
        align="center-center"
        :width="$props.width ? $props.width : '100vh'"
      >
        <FSCol>
          <FSText>
            {{ item.raw.label }}
          </FSText>
        </FSCol>
        <FSRow
          v-if="item.raw.showUnit"
        >
          <FSRow
            align="center-right"
          >
            <FSChip
              :label="item.raw.unit"
            />
          </FSRow>
        </FSRow>
      </FSRow>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";

import {useDataDefinitions} from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

export default defineComponent({
  components: {
    FSAutocompleteField,
    FSChip,
    FSRow,
    FSCol,
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
    dataCategoryId: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false
    },
    width : {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup(props) {

    const {getMany : fetchDataDefinitions, entities : dataDefinitions} = useDataDefinitions()

    const toggleDataDefinitions = computed(()=>{
      return dataDefinitions.value.map((d) => {
        return {
          id: d.id,
          label: d.label,
          showUnit : d.unit && d.unit.trim().length > 0,
          unit : d.unit,
        }
      })
    })

    watch(() => [props.modelId, props.dataCategoryId], async () => {
      await fetchDataDefinitions({modelsIds: props.modelId ? [props.modelId] : undefined, dataCategoryId: props.dataCategoryId})
    }, {immediate: true})

    return {
      toggleDataDefinitions,
      dataDefinitions
    }
  }
})

</script>
