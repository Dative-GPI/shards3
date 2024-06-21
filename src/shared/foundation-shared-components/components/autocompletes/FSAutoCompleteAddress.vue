<template>
  <FSAutocompleteField
    :toggleSet="false"
    :multiple="false"
    :items="places"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
    v-model:search="search"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

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
  setup(_props, { emit }) {
    const { search: searchAddress } = useAddress();

    const places = ref<Place[]>([]);
    const menu = ref(false);

    const innerFetch = async (search: string | null) => {
      if (search === null) {
        return Promise.resolve([]);
      }
      console.log("searching for address", search)
      places.value = await searchAddress(search);
      return Promise.resolve([]);
    };

    const { search, onUpdate } = useAutocomplete(
      places,
      [],
      emit,
      innerFetch,
      null,
      (item) => (item).id,
      (item) => (item).label,
      true,
      false
    );

    return {
      menu,
      places,
      search,
      onUpdate
    };
  }
});
</script>