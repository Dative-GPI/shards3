<template>
  <FSAutocompleteField
    :label="$props.label ?? $tr('ui.common.data-category', 'Data category')"
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :items="dataCategories"
    :loading="loading"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #item-append="{ item }"
    >
      <FSChip
        v-if="item.correlated"
        prependIcon="mdi-link"
        :label="$tr('autocomplete.data-category.linked','Linked')"
        :color="ColorEnum.Success"
      />
      <FSChip
        v-else
        prependIcon="mdi-link-off"
        :label="$tr('autocomplete.data-category.not-linked','Not linked')"
        :color="ColorEnum.Warning"
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
          #append
        >
          <FSChip
            v-if="props.item.correlated"
            prependIcon="mdi-link"
            :label="$tr('autocomplete.data-category.linked','Linked')"
            :color="ColorEnum.Success"
          />
          <FSChip
            v-else
            prependIcon="mdi-link-off"
            :label="$tr('autocomplete.data-category.not-linked','Not linked')"
            :color="ColorEnum.Warning"
          />
        </template>
      </FSButton>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { type DataCategoryFilters } from "@dative-gpi/foundation-core-domain/models";
import { useDataCategories } from "@dative-gpi/foundation-core-services/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";

export default defineComponent({
  name: "FSAutocompleteDataCategory",
  components: {
    FSAutocompleteField,
    FSButton,
    FSChip
  },
  props: {
    dataCategoriesFilters: {
      type: Object as PropType<DataCategoryFilters>,
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
    const { getMany: getManyDataCategories, fetching: fetchingDataCategories, entities: dataCategories } = useDataCategories();
    const { $tr } = useTranslationsProvider();

    const loading = computed((): boolean => {
      return init.value && fetchingDataCategories.value;
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("autocomplete.data-category.placeholder", "{0} data category(ies) selected", props.modelValue.length);
      }
      return null;
    });

    const fetch = (search: string | null) => {
      return getManyDataCategories({ ...props.dataCategoriesFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      dataCategories,
      [() => props.dataCategoriesFilters],
      emit,
      fetch
    );

    return {
      dataCategories,
      placeholder,
      ColorEnum,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>