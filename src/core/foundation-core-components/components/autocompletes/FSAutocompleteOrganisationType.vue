<template>
  <FSAutocompleteField :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :loading="loading"
    :items="organisationTypes"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-model:search="search"
    v-bind="$attrs" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";
import { OrganisationTypeFilters } from "@dative-gpi/foundation-shared-domain/models";

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
    toggleSetDisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyOrganisationTypes, fetching: fetchingOrganisationTypes, entities: organisationTypes } = useOrganisationTypes();

    const innerFetch = (search: string | null) => {
      return getManyOrganisationTypes({ ...props.organisationTypeFilters, search: search ?? undefined });
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      organisationTypes,
      [() => props.organisationTypeFilters],
      emit,
      innerFetch
    );

    const loading = computed((): boolean => {
      return init.value && fetchingOrganisationTypes.value;
    });

    return {
      organisationTypes,
      toggleSet,
      loading,
      search,
      onUpdate
    };
  }
});
</script>