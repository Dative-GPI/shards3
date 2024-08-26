<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :loading="loading"
    :items="languages"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #item-prepend="{ item }"
    >
      <FSIcon
        v-if="item.icon"
      >
        {{ item.icon }}
      </FSIcon>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { type LanguageFilters } from "@dative-gpi/foundation-shared-domain/models";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";
import { useLanguages } from "@dative-gpi/foundation-shared-services/composables";

import FSAutocompleteField from "../fields/FSAutocompleteField.vue";
import FSIcon from "../FSIcon.vue";

export default defineComponent({
  name: "FSAutocompleteLanguage",
  components: {
    FSAutocompleteField,
    FSIcon
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
    const { $tr } = useTranslationsProvider();

    const loading = computed((): boolean => {
      return init.value && fetchingLanguages.value;
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("ui.autocomplete-language.placeholder", "{0} language(s) selected", props.modelValue.length);
      }
      return null;
    });

    const fetch = (search: string | null) => {
      return getManyLanguages({ ...props.languageFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      languages,
      [() => props.languageFilters],
      emit,
      fetch
    );

    return {
      placeholder,
      languages,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>