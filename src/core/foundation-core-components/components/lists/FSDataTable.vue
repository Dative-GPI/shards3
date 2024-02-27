<template>
  <FSDataTableUI
    v-if="!getting"
    :filters="getFilters()"
    @update:filters="updateFilters"
    v-model:rowsPerPage="innerRowsPerPage"
    v-model:headers="innerHeaders"
    v-model:sortBy="innerSortBy"
    v-model:page="innerPage"
    v-model:mode="innerMode"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref, Ref, watch } from "vue";

import { ColumnInfos, TableFilter, TableOrder } from "@dative-gpi/foundation-core-domain/models";
import { useTable, useUpdateTable } from "@dative-gpi/foundation-core-services/composables";
import { FSDataTableFilter } from "@dative-gpi/foundation-shared-components/models";

import FSDataTableUI from "@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue";

export default defineComponent({
  name: "FSDataTable",
  components: {
    FSDataTableUI
  },
  props: {
    tableCode: {
      type: String,
      required: true
    },
    mode: {
      type: String as PropType<"table" | "iterator">,
      required: false,
      default: "table"
    }
  },
  setup(props) {
    const { update: updateTable } = useUpdateTable();
    const { get: getTable, getting, entity } = useTable();

    const innerHeaders: Ref<ColumnInfos[]> = ref([]);
    const innerFilters = ref<TableFilter[]>([]);
    const innerRowsPerPage = ref(10);
    const innerSortBy: Ref<TableOrder | null> = ref(null);
    const innerMode = ref(props.mode);
    const innerPage = ref(1);

    const getFilters = (): { [key: string]: FSDataTableFilter[] } => {
      return innerFilters.value.reduce((acc, filter) => {
        if (!acc[filter.key]) {
          acc[filter.key] = [];
        }
        acc[filter.key].push({ value: filter.value, hidden: filter.hidden });
        return acc;
      }, {});
    }

    const updateFilters = (value: { [key: string]: FSDataTableFilter[] }): void => {
      innerFilters.value = Object.entries(value).map(([key, filters]) => filters.map((filter) => ({
        key: key,
        value: filter.value,
        hidden: filter.hidden
      }))).reduce((acc, filters) => acc.concat(filters), []);
    };

    const reset = (): void => {
      innerHeaders.value = entity.value.columns;
      innerRowsPerPage.value = entity.value.rowsPerPage;
      innerSortBy.value = entity.value.sortBy;
      innerMode.value = entity.value.mode;
    };

    onMounted(() => {
      getTable(props.tableCode);
    });

    onUnmounted(() => {
      // update();
    });

    watch(() => props.tableCode, () => {
      getTable(props.tableCode);
    });

    watch(entity, () => {
      reset();
    });

    watch([innerHeaders, innerFilters, innerRowsPerPage, innerSortBy, innerMode, ], () => {
      // update();
    });

    return {
      getting,
      innerHeaders,
      innerRowsPerPage,
      innerPage,
      innerSortBy,
      innerMode,
      getFilters,
      updateFilters
    };
  },
});
</script>