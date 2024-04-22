<template>
  <FSAutocompleteField 
    :loading="fetching"
    :items="organisations"
    v-bind="$attrs" />
</template>
<script lang="ts">
import { PropType, defineComponent, watch } from 'vue'
import _ from 'lodash';

import { OrganisationFilters } from '@dative-gpi/foundation-shared-domain/models';
import { useOrganisations } from '@dative-gpi/foundation-shared-services/composables';

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
    }
  },
  setup(props) {
    const { entities: organisations, fetching, getMany } = useOrganisations();

    watch(() => props.organisationFilters, async (newValue, oldValue) => {
      if (!_.isEqual(newValue, oldValue)) {
        await getMany(newValue);
      }
    }, { immediate: true });

    return {
      organisations,
      fetching
    }
  }
})
</script>