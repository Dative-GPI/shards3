<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :loading="loading"
    :items="languages"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-model:search="search"
    v-bind="$attrs"
  >
    <template
      #selection="{ item }"
    >
      <FSRow
        align="center-center"
      >
        <FSIcon>
          {{ item.raw.icon }}
        </FSIcon>
        <FSSpan>
          {{ item.raw.label }}
        </FSSpan>
      </FSRow>
    </template>
    <template
      #item="{ props, item }"
    >
      <v-list-item
        v-bind="{ ...props, title: '' }"
      >
        <FSRow
          align="center-left"
        >
          <FSCheckbox
            v-if="$props.multiple"
            :modelValue="isSelected(item.value)"
          />
          <FSIcon>
            {{ item.raw.icon }}
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
import { computed, PropType, defineComponent } from "vue"

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useLanguages } from "@dative-gpi/foundation-shared-services/composables";
import { LanguageFilters } from "@dative-gpi/foundation-shared-domain/models";

import FSCheckbox from "../FSCheckbox.vue"
import FSAutocompleteField from "../fields/FSAutocompleteField.vue"

export default defineComponent({
  name: "FSAutocompleteLanguage",
  components: {
    FSAutocompleteField,
    FSCheckbox
  },
  props: {
    languageFilters: {
      type: Object as PropType<LanguageFilters>,
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
    const { getMany: getManyLanguages, fetching: fetchingLanguages, entities: languages } = useLanguages();

    const innerFetch = (search: string | null) => {
      return getManyLanguages({ ...props.languageFilters, search: search ?? undefined });
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      languages,
      [() => props.languageFilters],
      emit,
      innerFetch
    );

    const isSelected = (id: any) => {
      return props.modelValue?.includes(id);
    }

    const loading = computed((): boolean => {
      return init.value && fetchingLanguages.value;
    });

    return {
      languages,
      toggleSet,
      loading,
      search,
      isSelected,
      onUpdate
    };
  }
})
</script>