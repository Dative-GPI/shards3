<template>
  <FSCol>
    <FSRow
      align="bottom-center"
      width="50%"
    >
      <FSSearchField
        v-model="search"
      />
      <FSButtonCheckbox
        :label="$tr('ui.common.data-correlated','Correlated only')"
        :color="ColorEnum.Success"
        prependIcon="mdi-link"
        v-model="correlated"
      />
    </FSRow>
    <FSFadeOut
      maxHeight="150px"
      maskHeight="0px"
    >
      <FSDataTable
        defaultMode="iterator"
        :loading="fetchingDataCategories"
        :items="dataCategories"
        :modelValue="$props.modelValue"
        :showSearch="false"
        :tableCode="$props.tableCode"
        :search="search"
        @update:modelValue="$emit('update:modelValue', $event)"
        v-bind="$attrs"
      >
        <template
          v-for="(_, name) in $slots"
          v-slot:[name]="slotData"
        >
          <slot
            :name="name"
            v-bind="slotData"
          />
        </template>
        <template
          #item.tile="{ item }"
        >
          <FSClickable
            padding="12px"
            height="60px"
            width="233px"
            :color="isSelected(item.id) ? ColorEnum.Primary : ColorEnum.Dark"
            @click="$emit('update:modelValue', [item.id])"
            v-bind="$attrs"
          >
            <template
              #default
            >
              <FSRow
                align="center-center"
                :wrap="false"
              >
                <FSSpan
                  :lineClamp="1"
                >
                  {{ item.label }}
                </FSSpan>
                <v-spacer/>
                <FSIcon
                  :color="item.correlated ? ColorEnum.Primary : ColorEnum.Light"
                  :icon="item.correlated ? 'mdi-link' : 'mdi-link-off'"
                  variant="dark"
                />
              </FSRow>
            </template>
          </FSClickable>
        </template>
      </FSDataTable>
    </FSFadeOut>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref, watch } from "vue";
import _ from "lodash";

import {ColorEnum} from "@dative-gpi/foundation-shared-components/models";

import { useDataCategories } from "@dative-gpi/foundation-core-services/composables";
import type { DataCategoryFilters } from "@dative-gpi/foundation-core-domain/models";

import FSDataTable from "../FSDataTable.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSFadeOut from "@dative-gpi/foundation-shared-components/components/FSFadeOut.vue";
import FSClickable from "@dative-gpi/foundation-shared-components/components/FSClickable.vue";
import FSSearchField from "@dative-gpi/foundation-shared-components/components/fields/FSSearchField.vue";
import FSButtonCheckbox from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonCheckbox.vue";

export default defineComponent({
  name: "FSBaseDataCategoriesList",
  components: {
    FSDataTable,
    FSCol,
    FSFadeOut,
    FSClickable,
    FSRow,
    FSSpan,
    FSSearchField,
    FSButtonCheckbox,
    FSIcon
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    dataCategoryFilters: {
      type: Object as PropType<DataCategoryFilters>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: fetchDataCategories, fetching: fetchingDataCategories, entities: dataCategories } = useDataCategories();

    const search = ref<string | null | undefined >();
    const correlated = ref<boolean>(false);

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    watch(() => [props.dataCategoryFilters, search.value, correlated.value] , (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchDataCategories({...props.dataCategoryFilters, search: search.value, correlated: correlated.value ? true : undefined});
      }
    }, { immediate: true });

    return {
      fetchingDataCategories,
      dataCategories,
      ColorEnum,
      search,
      correlated,
      isSelected
    };
  }
});
</script>
