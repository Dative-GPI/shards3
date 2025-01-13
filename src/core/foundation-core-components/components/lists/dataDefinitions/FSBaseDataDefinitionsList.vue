<template>
  <FSDataTable
    defaultMode="iterator"
    :loading="fetchingDataDefinitions"
    :items="dataDefinitions"
    :tableCode="$props.tableCode"
    :modelValue="$props.modelValue"
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
      #toolbar
    >
      <FSButtonCheckbox
        :label="$tr('ui.common.data-correlated','Correlated only')"
        :color="ColorEnum.Success"
      />
    </template>
    <template
      #item.tile="{ item }"
    >
      <FSClickable
        padding="12px"
        height="60px"
        width="233px"
        :color="isSelected(item.id) ? ColorEnum.Primary : ColorEnum.Light"
        @click="$emit('update:modelValue', [item.id])"
        v-bind="$attrs"
      >
        <template
          #default
        >
          <FSRow
            align="center-center"
          >
            <FSIcon
              icon="mdi-thermometer"
            />
            <FSSpan
              :lineClamp="1"
            >
              {{ item.label }}
            </FSSpan>
            <v-spacer/>
            <FSIcon
              :color="ColorEnum.Primary"
              icon="mdi-link"
            />
          </FSRow>
        </template>
      </FSClickable>
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";
import _ from "lodash";

import {ColorEnum} from "@dative-gpi/foundation-shared-components/models";

import { useDataDefinitions } from "@dative-gpi/foundation-core-services/composables";
import type { DataDefinitionFilters } from "@dative-gpi/foundation-core-domain/models";

import FSDataTable from "../FSDataTable.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSClickable from "@dative-gpi/foundation-shared-components/components/FSClickable.vue";
import FSButtonCheckbox from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonCheckbox.vue";

export default defineComponent({
  name: "FSBaseDataDefinitionsList",
  components: {
    FSButtonCheckbox,
    FSDataTable,
    FSClickable,
    FSSpan,
    FSIcon,
    FSRow,
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    dataDefinitionFilters: {
      type: Object as PropType<DataDefinitionFilters>,
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
    const { getMany: fetchDataDefinitions, fetching: fetchingDataDefinitions, entities: dataDefinitions } = useDataDefinitions();

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    watch(() => props.dataDefinitionFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchDataDefinitions(props.dataDefinitionFilters);
      }
    }, { immediate: true });

    return {
      fetchingDataDefinitions,
      dataDefinitions,
      ColorEnum,
      isSelected
    };
  }
});
</script>
