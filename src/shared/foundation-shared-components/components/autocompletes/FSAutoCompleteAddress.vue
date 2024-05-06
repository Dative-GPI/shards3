<template>
  <FSAutocompleteField
    :items="addresses"
    :multiple="false"
    :modelValue="$props.modelValue"
    itemTitle="formattedAddress"
    :custom-filter="() => true"
    @update:modelValue="onUpdate"
    v-model:search="search"
    v-bind="$attrs"
    :no-data-text="$tr('ui.autocomplete.address.noDataText', 'No address corresponding')"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useAddress } from "../../composables/useAddress";

import { Address } from "@dative-gpi/foundation-core-domain/models";

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
    const { searchAddress } = useAddress();

    const addresses = ref<Address[]>([]);
    const menu = ref(false);

    const innerFetch = async (search: string | null) => {
      if (search === null) {
        return Promise.resolve([]);
      }
      addresses.value = await searchAddress(search);
      return Promise.resolve([]);
    };

    const { search, onUpdate } = useAutocomplete(
      addresses,
      [],
      emit,
      innerFetch,
      null,
      (item) => item.formattedAddress,
      (item) => encodeURI(item.formattedAddress),
      true
    );

    return {
      menu,
      addresses,
      search,
      onUpdate
    };
  }
});
</script>