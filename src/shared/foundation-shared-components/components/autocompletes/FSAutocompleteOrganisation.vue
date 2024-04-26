<template>
  <FSAutocompleteField 
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :loading="loading"
    :items="organisations"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-model:search="search"
    v-bind="$attrs" />
</template>
<script lang="ts">
import { PropType, computed, defineComponent, watch } from 'vue'
import _ from 'lodash';

import { OrganisationFilters } from '@dative-gpi/foundation-shared-domain/models';
import { useOrganisations } from '@dative-gpi/foundation-shared-services/composables';

import { useAutocomplete } from '../../composables';

import FSAutocompleteField from '../fields/FSAutocompleteField.vue'

export default defineComponent({
  name: 'FSAutocompleteOrganisation',
  components: {
    FSAutocompleteField
  },
  props: {
    organisationFilters: {
      type: Object as PropType<OrganisationFilters>,
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
  emit: ['update:modelValue'],
  setup(props, { emit }) {
    const { entities: organisations, fetching: fetchingOrganisations, getMany: getManyOrganisations } = useOrganisations();

    const innerFetch = (search: string | null) => {
      return getManyOrganisations({ ...props.organisationFilters, search: search ?? undefined });
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      organisations,
      [() => props.organisationFilters],
      emit,
      innerFetch
    );

    const isSelected = (id: any) => {
      return props.modelValue?.includes(id);
    }

    const loading = computed((): boolean => {
      return init.value && fetchingOrganisations.value;
    });

    return {
      organisations,
      toggleSet,
      loading,
      search,
      isSelected,
      onUpdate
    }
  }
})
</script>