<template>
  <FSAutocompleteField
    :toggleSet="false"
    :multiple="false"
    :items="places"
    :modelValue="modelValuePlace"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
    v-model:search="search"
    :clearable="false"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useAddress } from "../../composables/useAddress";

import { Address, Place } from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

export default defineComponent({
  name: "FSAutocompleteAddress",
  components: {
    FSAutocompleteField
  },
  props: {
    modelValue: {
      type: Object as PropType<Address | null>,
      required: false,
      default: null
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { search: searchAddress, get: getAddress  } = useAddress();

    const places = ref<Place[]>([]);
    const modelValuePlace = ref<Place | null>(null);

    const innerFetch = async (search: string | null) => {
      if (search === null) {
        return Promise.resolve([]);
      }
      places.value = await searchAddress(search);
      return Promise.resolve([]);
    };

    const innerUpdate = async (value: { id: string; label: string; } | { id: string; label: string; }[] | null) => {
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
      innerFetch,
      innerUpdate,
      (item) => (item).id,
      (item) => (item).label,
      true,
      false
    );

    const addressToPlace = (address: Address): Place => {
      return {
        id: address.placeId,
        label: address.placeLabel
      };
    };

    onMounted(() => {
      if(!props.modelValue) {
        return;
      }
      modelValuePlace.value = addressToPlace(props.modelValue);
    });

    watch(() => props.modelValue, (newValue) => {
      if(!newValue) {
        return;
      }
      modelValuePlace.value = addressToPlace(newValue);
    });

    return {
      modelValuePlace,
      places,
      search,
      onUpdate
    };
  }
});
</script>