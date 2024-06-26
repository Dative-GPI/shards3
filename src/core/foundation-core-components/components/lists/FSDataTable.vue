<template>
  <FSLoadDataTable
    v-if="!initialized || gettingUserOrganisationTable"
  />
  <FSDataTableUI
    v-else
    @update:rowsPerPage="table.rowsPerPage = $event"
    @update:filters="table.filters = $event"
    @update:headers="table.headers = $event"
    @update:sortBy="table.sortBy = $event"
    @update:mode="table.mode = $event"
    @update:page="table.page = $event"
    v-bind="{ ...computedTable, ...$attrs }"
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
import type { PropType} from "vue";
import { computed, defineComponent, onUnmounted, ref, watch } from "vue";

import { useUserOrganisationTable, useUpdateUserOrganisationTable } from "@dative-gpi/foundation-core-services/composables";
import { useDebounce, useTables } from "@dative-gpi/foundation-shared-components/composables";
import type { FSDataTable } from "@dative-gpi/foundation-shared-components/models";

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
    },
    customSorts: {
      type: Object as PropType<{ [key: string]: any }>,
      required: false,
      default: () => ({})
    },
    customSortRaws: {
      type: Object as PropType<{ [key: string]: any }>,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const { get: getUserOrganisationTable, getting: gettingUserOrganisationTable, entity: userOrganisationTable } = useUserOrganisationTable();
    const { update: updateUserOrganisationTable } = useUpdateUserOrganisationTable();
    const { getTable, setTable } = useTables();
    const { debounce, cancel } = useDebounce();

    const initialized = ref(false);

    const table = ref<FSDataTable>({
      headers: [],
      mode: "table",
      sortBy: null,
      rowsPerPage: 10,
      filters: {},
      page: 1
    });

    const computedTable = computed(() => ({
      ...table.value,
      headers: table.value.headers.map(header => ({
        ...header,
        sort: header.value && props.customSorts[header.value] || null,
        sortRaw: header.value && props.customSortRaws[header.value] || null 
      }))
    }));

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

    watch(() => props.tableCode, async (): Promise<void> => {
      if (props.tableCode) {
        const composableTable = getTable(props.tableCode);
        if (composableTable) {
          table.value = composableTable;
        }
        else {
          await getUserOrganisationTable(props.tableCode);
          if (userOrganisationTable.value) {
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
            }
          }
        }
      }
      initialized.value = true;
    }, { immediate: true });

    watch(() => table.value, () => {
      if (table.value && initialized.value) {
        debounce(updateTable, props.debounceTime);
      }
    }, { deep: true });

    return {
      gettingUserOrganisationTable,
      computedTable,
      initialized,
      table
    };
  },
});
</script>