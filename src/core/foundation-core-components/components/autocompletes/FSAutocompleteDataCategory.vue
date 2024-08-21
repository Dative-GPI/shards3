<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :items="dataCategories"
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
        gap="2px"
        class="mr-2"
        :wrap="false"
      >
        <FSSpan>
          {{ item.raw.label }}
        </FSSpan>
        <FSIcon
          v-if="$props.multiple"
          :color="item.raw.correlated ? ColorEnum.Success : ColorEnum.Warning"
        >
          {{ item.raw.correlated ? 'mdi-link' : 'mdi-link-off' }}
        </FSIcon>
      </FSRow>
    </template>
    <template
      #autocomplete-suffix
    >
      <FSChip
        v-if="dataCategorySelected"
        :color="dataCategorySelected.correlated ? ColorEnum.Success : ColorEnum.Warning"
      >
        <FSRow
          align="center-center"
          :wrap="false"
        >
          <FSIcon
            :icon="dataCategorySelected.correlated ? 'mdi-link' : 'mdi-link-off'"
          />
          <FSSpan
            font="text-overline"
          >
            {{ dataCategorySelected?.correlated ? $tr('ui.common.linked','Linked') : $tr('ui.common.notLinked','Not linked') }}
          </FSSpan>
        </FSRow>
      </FSChip>
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
        <FSIcon
          :color="item.raw.correlated ? ColorEnum.Success : ColorEnum.Warning"
        >
          {{ item.raw.correlated ? 'mdi-link' : 'mdi-link-off' }}
        </FSIcon>
      </FSRow>
    </template>
    <template
      #toggle-set-item="props"
    >
      <FSButton
        :iconColor="props.item.correlated ? ColorEnum.Success : ColorEnum.Warning"
        :variant="props.getVariant(props.item)"
        :color="props.getColor(props.item)"
        :class="props.getClass(props.item)"
        :label="props.item.label"
        @click="props.toggle(props.item)"
      >
        <FSRow
          align="center-center"
          :wrap=false
        >
          <FSSpan>
            {{ props.item.label}}
          </FSSpan>
          <FSIcon
            :icon="props.item.correlated ? 'mdi-link' : 'mdi-link-off'"
            :color="props.item.correlated ? ColorEnum.Success : ColorEnum.Warning"
          />
        </FSRow>
      </FSButton>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import {ColorEnum} from "@dative-gpi/foundation-shared-components/models";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import type { DataCategoryInfos} from "@dative-gpi/foundation-core-domain/models";
import { type DataCategoryFilters } from "@dative-gpi/foundation-core-domain/models";
import { useDataCategories } from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteDataCategory",
  components: {
    FSAutocompleteField,
    FSButton,
    FSIcon,
    FSSpan,
    FSChip,
    FSRow
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
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyDataCategories, fetching: fetchingDataCategories, entities: dataCategories } = useDataCategories();

    const loading = computed((): boolean => {
      return init.value && fetchingDataCategories.value;
    });

    const dataCategorySelected = computed((): DataCategoryInfos | undefined => {
      if(props.multiple) {
        return undefined;
      }
      return dataCategories.value.find((dataCategory: DataCategoryInfos) => dataCategory.id === props.modelValue);
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
      dataCategorySelected,
      dataCategories,
      toggleSet,
      ColorEnum,
      loading,
      onUpdate
    };
  }
});
</script>