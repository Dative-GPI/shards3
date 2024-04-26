<template>
  <FSAutocompleteField :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :loading="loading"
    :items="dataDefinitions"
    :multiple="$props.multiple"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-model:search="search"
    v-bind="$attrs">
    <template #selection="{ item }">
      <FSRow align="center-center"
        :wrap="false"
        :gap="0">
        <FSText>
          {{ item.raw.label }}
        </FSText>
        <FSText v-if="item.raw.unit">
          ({{ item.raw.unit }})
        </FSText>
      </FSRow>
    </template>
    <template #item="{ props, item }">
      <v-list-item v-bind="{ ...props, title: '' }">
        <FSRow align="center-left">
          <FSCheckbox v-if="$props.multiple"
            :modelValue="isSelected(item.value)" />
          <FSRow :gap="0">
            <FSText>
              {{ item.raw.label }}
            </FSText>
            <FSText v-if="item.raw.unit">
              ({{ item.raw.unit }})
            </FSText>
          </FSRow>
        </FSRow>
      </v-list-item>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useDataDefinitions } from "@dative-gpi/foundation-core-services/composables";
import { DataDefinitionFilters } from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

export default defineComponent({
  name: "FSAutocompleteDataDefinition",
  components: {
    FSAutocompleteField,
    FSText
  },
  props: {
    dataDefinitionFilters: {
      type: Object as PropType<DataDefinitionFilters>,
      required: false,
      default: null
    },
    modelValue: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    toggleSetDisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyDataDefinitions, fetching: fetchingDataDefinitions, entities: dataDefinitions } = useDataDefinitions();

    const innerFetch = (search: string | null) => {
      return getManyDataDefinitions({ ...props.dataDefinitionFilters, search: search ?? undefined });
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      dataDefinitions,
      [() => props.dataDefinitionFilters],
      emit,
      innerFetch
    );

    const loading = computed((): boolean => {
      return init.value && fetchingDataDefinitions.value;
    });

    const isSelected = (id: any) => {
      return props.modelValue?.includes(id);
    }

    return {
      dataDefinitions,
      toggleSet,
      loading,
      search,
      onUpdate,
      isSelected
    };
  }
});
</script>