<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :loading="loading"
    :items="languages"
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
        <FSIcon
          v-if="item.raw.icon"
        >
          {{ item.raw.icon }}
        </FSIcon>
        <FSSpan>
          {{ item.raw.label }}
        </FSSpan>
      </FSRow>
    </template>
    <template
      #item-label="{ item, font }"
    >
      <FSRow
        align="center-left"
        :wrap="false"
      >
        <FSIcon
          v-if="item.raw.icon"
        >
          {{ item.raw.icon }}
        </FSIcon>
        <FSSpan
          :font="font"
        >
          {{ item.raw.label }}
        </FSSpan>
      </FSRow>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent } from "vue"

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useLanguages } from "@dative-gpi/foundation-shared-services/composables";
import type { LanguageFilters } from "@dative-gpi/foundation-shared-domain/models";

import FSAutocompleteField from "../fields/FSAutocompleteField.vue";
import FSIcon from "../FSIcon.vue";
import FSSpan from "../FSSpan.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteLanguage",
  components: {
    FSAutocompleteField,
    FSIcon,
    FSSpan,
    FSRow
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

    const loading = computed((): boolean => {
      return init.value && fetchingLanguages.value;
    });

    const innerFetch = (search: string | null) => {
      return getManyLanguages({ ...props.languageFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      languages,
      [() => props.languageFilters],
      emit,
      innerFetch
    );

    return {
      languages,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>