<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :loading="loading"
    :items="locations"
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
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";
import { type LocationFilters } from "@dative-gpi/foundation-core-domain/models";
import { useLocations } from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

export default defineComponent({
  name: "FSAutocompleteLocation",
  components: {
    FSAutocompleteField,
    FSIcon
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
    const { getMany: getManyLocations, fetching: fetchingLocations, entities: locations } = useLocations();
    const { $tr } = useTranslationsProvider();

    const loading = computed((): boolean => {
      return init.value && fetchingLocations.value;
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("ui.autocomplete-location.placeholder", "{0} location(s) selected", props.modelValue.length);
      }
      return null;
    });

    const fetch = (search: string | null) => {
      return getManyLocations({ ...props.locationFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      locations,
      [() => props.locationFilters],
      emit,
      fetch
    );

    return {
      placeholder,
      locations,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>