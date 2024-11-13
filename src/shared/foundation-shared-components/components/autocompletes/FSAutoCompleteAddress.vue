<template>
  <FSAutocompleteField
    :label="$props.label ?? $tr('autocomplete.address.label', 'Address')"
    :clearable="false"
    :toggleSet="false"
    :multiple="false"
    :items="items"
    :modelValue="$props.modelValue?.placeId"
    @update:modelValue="onUpdate"
    v-model:search="search"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { type Address, type Place } from "@dative-gpi/foundation-shared-domain/models";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";

import { useAddress } from "../../composables/useAddress";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  name: "FSAutocompleteAddress",
  components: {
    FSAutocompleteField
  },
  props: {
    modelValue: {
      type: Object as () => Address | null,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { search: searchAddress, get: getAddress  } = useAddress();

    const places = ref<Place[]>([]);

    const items = computed(() => {
      if(props.modelValue) {
        const currentPlace = addressToPlace(props.modelValue);
        const searchedPlaces = places.value.filter((place) => place.id !== currentPlace.id);
        return [currentPlace, ...searchedPlaces];
      }
      return places.value;
    });

    const fetch = async (search: string | null) => {
      if (search === null) {
        return Promise.resolve([]);
      }
      places.value = await searchAddress(search);
      return Promise.resolve([]);
    };

    const update = async (value: { id: string; label: string; } | { id: string; label: string; }[] | null) => {
      if (value === null) {
        emit("update:modelValue", null);
        return;
      }
      if (Array.isArray(value)) {
        value = value[0];
      }
      const address = await getAddress(value);
      emit("update:modelValue", address );
    };

    const { search, onUpdate } = useAutocomplete(
      places,
      [],
      emit,
      fetch,
      update,
      (item) => (item).id,
      (item) => (item).label,
      true,
      false,
      0,
      500
    );

    const addressToPlace = (address: Address): Place => {
      return {
        id: address.placeId,
        label: address.placeLabel
      };
    };

    return {
      places,
      items,
      search,
      onUpdate
    };
  }
});
</script>