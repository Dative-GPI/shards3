<template>
  <FSAutocompleteField
    :items="addresses"
    :multiple="false"
    :modelValue="$props.modelValue"
    itemTitle="formattedAddress"
    :custom-filter="() => true"
    @update:modelValue="onUpdate"
    @update:search="onSearch"
    v-model:search="search"
    v-bind="$attrs"
    :no-data-text="$tr('ui.autocomplete.address.noDataText', 'No address corresponding')"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import { useAddress } from "../../composables/useAddress";
import { Address } from "@dative-gpi/foundation-core-domain/models";

export default defineComponent({
  name: "FSAutocompleteAddress",
  components: {
    FSAutocompleteField,
    FSText
  },
  props: {
    modelValue: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
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

    const onSearch = () => {
      menu.value = false;
    }

    return {
      menu,
      addresses,
      search,
      onUpdate,
      onSearch
    };
  }
});
</script>