<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :loading="loading"
    :items="models"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useModels } from "@dative-gpi/foundation-core-services/composables";
import type { ModelFilters } from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  name: "FSAutocompleteModel",
  components: {
    FSAutocompleteField
  },
  props: {
    modelFilters: {
      type: Object as PropType<ModelFilters>,
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
    const { getMany: getManyModels, fetching: fetchingModels, entities: models } = useModels();

    const loading = computed((): boolean => {
      return init.value && fetchingModels.value;
    });

    const innerFetch = (search: string | null) => {
      return getManyModels({ ...props.modelFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      models,
      [() => props.modelFilters],
      emit,
      innerFetch
    );

    return {
      models,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>