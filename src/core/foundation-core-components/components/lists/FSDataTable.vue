<template>
  <FSLoadDataTable
    v-if="gettingUserOrganisationTable"
  />
  <FSDataTableUI
    v-else
    :headers="table.headers"
    :mode="table.mode"
    :sortBy="table.sortBy"
    :rowsPerPage="table.rowsPerPage"
    :filters="table.filters"
    :page="table.page"
    @update:headers="updateHeaders"
    @update:mode="updateMode"
    @update:sortBy="updateSortBy"
    @update:rowsPerPage="updateRowsPerPage"
    @update:filters="updateFilters"
    @update:page="updatePage"
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
  </FSDataTableUI>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref, watch } from "vue";

import { useUserOrganisationTable, useUpdateUserOrganisationTable } from "@dative-gpi/foundation-core-services/composables";
import { FSDataTable, FSDataTableColumn, FSDataTableFilter, FSDataTableOrder } from "@dative-gpi/foundation-shared-components/models";
import { useDebounce, useTables } from "@dative-gpi/foundation-shared-components/composables";

import FSLoadDataTable from "@dative-gpi/foundation-shared-components/components/lists/FSLoadDataTable.vue";
import FSDataTableUI from "@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue";

export default defineComponent({
  name: "FSDataTable",
  components: {
    FSLoadDataTable,
    FSDataTableUI
  },
  props: {
    tableCode: {
      type: String,
      required: true
    },
    debounceTime: {
      type: Number,
      required: false,
      default: 1000
    }
  },
  setup(props) {
    const { get: getUserOrganisationTable, getting: gettingUserOrganisationTable, entity: userOrganisationTable } = useUserOrganisationTable();
    const { update: updateUserOrganisationTable } = useUpdateUserOrganisationTable();
    const { getTable, setTable } = useTables();
    const { debounce, cancel } = useDebounce();

    const table = ref<FSDataTable | null>({
      headers: [],
      mode: "table",
      sortBy: null,
      rowsPerPage: 10,
      filters: {},
      page: 1
    });

    const reset = (): void => {
      if (getTable(props.tableCode)) {
        table.value = getTable(props.tableCode);
      }
      else if (userOrganisationTable.value) {
        table.value = {
          headers: userOrganisationTable.value.columns,
          sortBy: {
            key: userOrganisationTable.value.sortByKey,
            order: userOrganisationTable.value.sortByOrder
          },
          mode: userOrganisationTable.value.mode,
          rowsPerPage: userOrganisationTable.value.rowsPerPage,
          filters: {},
          page: 1
        };
      }
    };

    const updateHeaders = (value: FSDataTableColumn[]): void => {
      if (table.value) {
        table.value.headers = value;
        debounce(updateTable, props.debounceTime);
      }
    };

    const updateMode = (value: "table" | "iterator"): void => {
      if (table.value) {
        table.value.mode = value;
        debounce(updateTable, props.debounceTime);
      }
    };

    const updateSortBy = (value: FSDataTableOrder | null): void => {
      if (table.value) {
        table.value.sortBy = value;
        debounce(updateTable, props.debounceTime);
      }
    };

    const updateRowsPerPage = (value: -1 | 10 | 30): void => {
      if (table.value) {
        table.value.rowsPerPage = value;
        debounce(updateTable, props.debounceTime);
      }
    };

    const updateFilters = (value: { [key: string]: FSDataTableFilter[] }): void => {
      if (table.value) {
        table.value.filters = value;
        setTable(props.tableCode, table.value);
      }
    };

    const updatePage = (value: number): void => {
      if (table.value) {
        table.value.page = value;
        setTable(props.tableCode, table.value);
      }
    };

    const updateTable = (): void => {
      if (table.value) {
        setTable(props.tableCode, table.value);
        updateUserOrganisationTable(props.tableCode, {
          columns: table.value.headers.map(column => ({
            columnId: column.columnId,
            hidden: column.hidden,
            index: column.index
          })),
          rowsPerPage: table.value.rowsPerPage,
          sortByKey: table.value.sortBy?.key ?? null,
          sortByOrder: table.value.sortBy?.order ?? null,
          mode: table.value.mode
        });
      }
    };

    onUnmounted(() => {
      cancel();
      updateTable();
    });

    watch(() => props.tableCode, () => {
      if (props.tableCode) {
        getUserOrganisationTable(props.tableCode);
      }
    }, { immediate: true });

    watch(userOrganisationTable, () => {
      reset();
    });

    return {
      gettingUserOrganisationTable,
      table,
      updateRowsPerPage,
      updateFilters,
      updateHeaders,
      updateSortBy,
      updateMode,
      updatePage
    };
  },
});
</script>