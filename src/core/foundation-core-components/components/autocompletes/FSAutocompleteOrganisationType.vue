<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :items="organisationTypes"
    :loading="loading"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
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

    const loading = computed((): boolean => {
      return init.value && fetchingOrganisationTypes.value;
    });

    const innerFetch = (search: string | null) => {
      return getManyOrganisationTypes({ ...props.organisationTypeFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      organisationTypes,
      [() => props.organisationTypeFilters],
      emit,
      innerFetch
    );

    return {
      organisationTypes,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>