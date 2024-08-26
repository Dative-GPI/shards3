<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :items="manufacturers"
    :loading="loading"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #item-prepend="{ item }"
    >
      <FSImage
        v-if="item.imageId"
        height="26px"
        width="26px"
        :imageId="item.imageId"
      />
    </template>
    <template
      #toggle-set-item="props"
    >
      <FSButton
        :padding="props.item.imageId ? ['6px 16px', '4px 12px'] : undefined"
        :variant="props.getVariant(props.item)"
        :color="props.getColor(props.item)"
        :class="props.getClass(props.item)"
        :label="props.item.label"
        @click="props.toggle(props.item)"
      >
        <template
          v-if="props.item.imageId"
          #prepend
        >
          <FSImage
            height="26px"
            width="26px"
            :imageId="props.item.imageId"
          />
        </template>
      </FSButton>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { type ManufacturerFilters } from "@dative-gpi/foundation-core-domain/models";
import { useManufacturers } from "@dative-gpi/foundation-core-services/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";

export default defineComponent({
  name: "FSAutocompleteManufacturer",
  components: {
    FSAutocompleteField,
    FSButton,
    FSImage
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
    const { getMany: getManyManufacturers, fetching: fetchingManufacturers, entities: manufacturers } = useManufacturers();
    const { $tr } = useTranslationsProvider();

    const loading = computed((): boolean => {
      return init.value && fetchingManufacturers.value;
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("ui.autocomplete-manufacturer.placeholder", "{0} manufacturer(s) selected", props.modelValue.length);
      }
      return null;
    });

    const fetch = (search: string | null) => {
      return getManyManufacturers({ ...props.manufacturerFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      manufacturers,
      [() => props.manufacturerFilters],
      emit,
      fetch
    );

    return {
      manufacturers,
      placeholder,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>