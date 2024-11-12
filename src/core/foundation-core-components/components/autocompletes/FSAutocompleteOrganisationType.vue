<template>
  <FSAutocompleteField
    :label="$props.label ?? $tr('autocomplete.organisation-type.label', 'Organisation type')"
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :items="organisationTypes"
    :loading="loading"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type OrganisationTypeFilters } from "@dative-gpi/foundation-shared-domain/models";
import { useOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  name: "FSAutocompleteOrganisationType",
  components: {
    FSAutocompleteField
  },
  props: {
    organisationTypeFilters: {
      type: Object as PropType<OrganisationTypeFilters>,
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
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyOrganisationTypes, fetching: fetchingOrganisationTypes, entities: organisationTypes } = useOrganisationTypes();
    const { $tr } = useTranslationsProvider();

    const loading = computed((): boolean => {
      return init.value && fetchingOrganisationTypes.value;
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("autocomplete.organisation-type.placeholder", "{0} organisation type(s) selected", props.modelValue.length);
      }
      return null;
    });

    const fetch = (search: string | null) => {
      return getManyOrganisationTypes({ ...props.organisationTypeFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      organisationTypes,
      [() => props.organisationTypeFilters],
      emit,
      fetch
    );

    return {
      organisationTypes,
      placeholder,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>