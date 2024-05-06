<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :toggleSetItems="toggleSetItems"
    :multiple="$props.multiple"
    :items="dataCategories"
    :loading="loading"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #autocomplete-selection="{ item }"
    >
      <FSRow
        v-if="$props.modelValue"
        align="center-center"
        :wrap="false"
      >
        <FSIcon>
          {{ item.raw.correlated ? 'mdi-link' : 'mdi-link-off' }}
        </FSIcon>
        <FSSpan>
          {{ item.raw.label }}
        </FSSpan>
      </FSRow>
    </template>
    <template
      #autocomplete-item="{ props, item }"
    >
      <v-list-item
        v-bind="{ ...props, title: '' }"
      >
        <FSRow
          align="center-left"
        >
          <FSCheckbox
            v-if="$props.multiple"
            :modelValue="$props.modelValue?.includes(item.value)"
          />
          <FSIcon>
            {{ item.raw.correlated ? 'mdi-link' : 'mdi-link-off' }}
          </FSIcon>
          <FSSpan>
            {{ item.raw.label }}
          </FSSpan>
        </FSRow>
      </v-list-item>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { DataCategoryFilters, DataCategoryInfos } from "@dative-gpi/foundation-core-domain/models";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useDataCategories } from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSCheckbox from "@dative-gpi/foundation-shared-components/components/FSCheckbox.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteDataCategory",
  components: {
    FSAutocompleteField,
    FSCheckbox,
    FSIcon,
    FSSpan,
    FSRow
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

    const loading = computed((): boolean => {
      return init.value && fetchingDataCategories.value;
    });

    const toggleSetItems = computed((): any[] => {
      return dataCategories.value.map((dataCategory: DataCategoryInfos) => ({
          id: dataCategory.id,
          prependIcon: dataCategory.correlated ? 'mdi-link' : 'mdi-link-off',
          label: dataCategory.label
      }));
    });

    const innerFetch = (search: string | null) => {
      return getManyDataCategories({ ...props.dataCategoriesFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      dataCategories,
      [() => props.dataCategoriesFilters],
      emit,
      innerFetch
    );

    return {
      dataCategories,
      toggleSetItems,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>