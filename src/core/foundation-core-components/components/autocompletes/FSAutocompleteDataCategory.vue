<template>
  <FSAutocompleteField :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :loading="loading"
    :items="dataCategories"
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
        <FSIcon>
          {{ item.raw.correlated ? 'mdi-link' : 'mdi-link-off' }}
        </FSIcon>
      </FSRow>
    </template>
    <template #item="{ props, item }">
      <v-list-item v-bind="{ ...props, title: '' }">
        <FSRow align="center-left">
          <FSCheckbox v-if="$props.multiple"
            :modelValue="isSelected(item.value)" />
          <FSRow :gap="2">
            <FSText>
              {{ item.raw.label }}
            </FSText>
            <FSIcon>
              {{ item.raw.correlated ? 'mdi-link' : 'mdi-link-off' }}
            </FSIcon>
          </FSRow>
        </FSRow>
      </v-list-item>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useDataCategories } from "@dative-gpi/foundation-core-services/composables";
import { DataCategoryFilters } from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

export default defineComponent({
  name: "FSAutocompleteDataCategory",
  components: {
    FSAutocompleteField,
    FSText
  },
  props: {
    dataCategoriesFilters: {
      type: Object as PropType<DataCategoryFilters>,
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
    const { getMany: getManyDataCategories, fetching: fetchingDataCategories, entities: dataCategories } = useDataCategories();

    const innerFetch = (search: string | null) => {
      return getManyDataCategories({ ...props.dataCategoriesFilters, search: search ?? undefined });
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      dataCategories,
      [() => props.dataCategoriesFilters],
      emit,
      innerFetch
    );

    const loading = computed((): boolean => {
      return init.value && fetchingDataCategories.value;
    });

    const isSelected = (id: any) => {
      return props.modelValue?.includes(id);
    }

    return {
      dataCategories,
      toggleSet,
      loading,
      search,
      onUpdate,
      isSelected
    };
  }
});
</script>