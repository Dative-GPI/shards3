<template>
  <FSAutocompleteField
    :label="$props.label ?? $tr('ui.common.data-definition', 'Data')"
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :items="dataDefinitions"
    :loading="loading"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #item-append="{ item }"
    >
      <FSChip
        v-if="item.unit"
        :label="item.unit"
      />
    </template>
    <template
      #toggle-set-item="props"
    >
      <FSButton
        :variant="props.getVariant(props.item)"
        :color="props.getColor(props.item)"
        :class="props.getClass(props.item)"
        :label="props.item.label"
        @click="props.toggle(props.item)"
      >
        <template
          v-if="props.item.unit"
          #append
        >
          <FSChip
            :label="props.item.unit"
          />
        </template>
      </FSButton>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type DataDefinitionFilters } from "@dative-gpi/foundation-core-domain/models";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useDataDefinitions } from "@dative-gpi/foundation-core-services/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";

export default defineComponent({
  name: "FSAutocompleteDataDefinition",
  components: {
    FSAutocompleteField,
    FSButton,
    FSChip
  },
  props: {
    dataDefinitionFilters: {
      type: Object as PropType<DataDefinitionFilters>,
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
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyDataDefinitions, fetching: fetchingDataDefinitions, entities: dataDefinitions } = useDataDefinitions();
    const { $tr } = useTranslationsProvider();

    const loading = computed((): boolean => {
      return init.value && fetchingDataDefinitions.value;
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("autocomplete.data-definition.placeholder", "{0} data definition(s) selected", props.modelValue.length);
      }
      return null;
    });

    const fetch = (search: string | null) => {
      return getManyDataDefinitions({ ...props.dataDefinitionFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      dataDefinitions,
      [() => props.dataDefinitionFilters],
      emit,
      fetch
    );

    return {
      dataDefinitions,
      placeholder,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>