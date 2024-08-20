<template>
  <FSAutocompleteField
    :width="$props.width ? $props.width : '100%'"
    :label="label ?? $tr('ui.common.data-category', 'Data category')"
    :items="toggleDataCategories"
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
        <FSRow>
          <FSRow
            align="center-right"
          >
            <FSChip
              :label="item.raw.unit"
              :color="item.raw.correlated ? ColorEnum.Success : ColorEnum.Warning"
            >
              <FSRow
                v-if="item.raw.correlated"
                align="center-center"
                :wrap="false"
              >
                <FSIcon
                  icon="mdi-link"
                  size="16px"
                />
                <FSText
                  font="text-overline"
                >
                  {{ $tr('ui.common.linked', 'Linked') }}
                </FSText>
              </FSRow>
              <FSRow
                v-else
                align="center-center"
                :wrap="false"
              >
                <FSIcon
                  icon="mdi-link-off"
                  size="16px"
                />
                <FSSpan
                  font="text-overline"
                >
                  {{ $tr('ui.common.not-linked', 'Not linked') }}
                </FSSpan>
              </FSRow>
            </FSChip>
          </FSRow>
        </FSRow>
      </FSRow>
    </template></FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import {useDataCategories} from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";


export default defineComponent({
  components: {
    FSAutocompleteField,
    FSChip,
    FSRow,
    FSCol,
    FSText,
    FSIcon,
    FSSpan
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
    width: {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup(props) {
    const {getMany : fetchdataCategories, entities : dataCategories} = useDataCategories()

    const toggleDataCategories = computed(()=>{
      return dataCategories.value.map((d) => {
        return {
          id: d.id,
          label: d.label,
          correlated: d.correlated
        }
      })
    })

    watch(() => props.modelId, () => {
      fetchdataCategories({modelId: props.modelId})
    }, {immediate: true})


    return {
      ColorEnum,
      toggleDataCategories,
      dataCategories
    }
  }
})

</script>
