<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :items="dataDefinitions"
    :loading="loading"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #autocomplete-selection="{ item }"
    >
      <FSRow
        v-if="$props.modelValue"
        align="center-center"
        padding="0 8px 0 0"
        gap="4px"
        :wrap="false"
      >
        <FSSpan>
          {{ item.raw.label }}
        </FSSpan>
        <FSChip
          v-if="$props.multiple && item.raw.unit"
          :label="item.raw.unit"
        />
      </FSRow> 
    </template>
    <template
      v-if="selected && selected.unit"
      #autocomplete-suffix
    >
      <FSChip
        :label="selected.unit"
      />
    </template>
    <template
      #item-label="{ item, font }"
    >
      <FSRow
        align="center-left"
        :wrap="false"
      >
        <FSSpan
          :font="font"
        >
          {{ item.raw.label }}
        </FSSpan>
      </FSRow>
    </template>
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

import { type DataDefinitionInfos, type DataDefinitionFilters } from "@dative-gpi/foundation-core-domain/models";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useDataDefinitions } from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteDataDefinition",
  components: {
    FSAutocompleteField,
    FSButton,
    FSChip,
    FSSpan,
    FSRow
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
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyDataDefinitions, fetching: fetchingDataDefinitions, entities: dataDefinitions } = useDataDefinitions();

    const loading = computed((): boolean => {
      return init.value && fetchingDataDefinitions.value;
    });

    const selected = computed((): DataDefinitionInfos | undefined => {
      if (props.multiple) {
        return undefined;
      }
      return dataDefinitions.value.find((dataDefinition: DataDefinitionInfos) => dataDefinition.id === props.modelValue);
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
      toggleSet,
      selected,
      loading,
      onUpdate
    };
  }
});
</script>