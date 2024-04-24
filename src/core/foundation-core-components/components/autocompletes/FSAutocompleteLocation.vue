<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :loading="loading"
    :items="locations"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-model:search="search"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useLocations } from "@dative-gpi/foundation-core-services/composables";
import { LocationFilters } from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  name: "FSAutocompleteLocation",
  components: {
    FSAutocompleteField
  },
  props: {
    locationFilters: {
      type: Object as PropType<LocationFilters>,
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
    const { getMany: getManyLocations, fetching: fetchingLocations, entities: locations } = useLocations();

    const innerFetch = (search: string | null) => {
      return getManyLocations({ ...props.locationFilters, search: search ?? undefined });
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      locations,
      [() => props.locationFilters],
      emit,
      innerFetch
    );

    const loading = computed((): boolean => {
      return init.value && fetchingLocations.value;
    });

    return {
      locations,
      toggleSet,
      loading,
      search,
      onUpdate
    };
  }
});
</script>