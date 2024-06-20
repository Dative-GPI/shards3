<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :items="manufacturers"
    :loading="loading"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useManufacturers } from "@dative-gpi/foundation-core-services/composables";
import { ManufacturerFilters } from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  name: "FSAutocompleteManufacturer",
  components: {
    FSAutocompleteField
  },
  props: {
    manufacturerFilters: {
      type: Object as PropType<ManufacturerFilters>,
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
    const { getMany: getManyManufacturers, fetching: fetchingManufacturers, entities: manufacturers } = useManufacturers();

    const innerFetch = (search: string | null) => {
      return getManyManufacturers({ ...props.manufacturerFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      manufacturers,
      [() => props.manufacturerFilters],
      emit,
      innerFetch
    );

    const loading = computed((): boolean => {
      return init.value && fetchingManufacturers.value;
    });

    return {
      manufacturers,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>