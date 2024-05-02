<template>
  <FSAutocompleteField
    :loading="loading"
    :items="addresses"
    :multiple="false"
    :modelValue="$props.modelValue"
    itemTitle="formattedAddress"
    :custom-filter="() => true"
    @update:modelValue="onUpdate"
    @update:search="onSearch"
    v-model:search="search"
    v-model:menu="menu"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
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

    const innerUpdate = (value: Address | null) => {
      if (value === null) {
        return;
      }
      menu.value = false;
      emit("update:modelValue", value);
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      addresses,
      [],
      emit,
      innerFetch,
      innerUpdate,
      (item) => item.formattedAddress,
      (item) => encodeURI(item.formattedAddress),
      true
    );

    const loading = computed((): boolean => {
      //return init.value;
      return false;
    });

    const onSearch = () => {
      menu.value = false;
    }

    return {
      menu,
      addresses,
      loading,
      search,
      onUpdate,
      onSearch
    };
  }
});
</script>