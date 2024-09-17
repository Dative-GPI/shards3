import { ref, type Ref } from "vue";

import { type UpdateUserOrganisationTableDTO, type UserOrganisationTableDetails } from "@dative-gpi/foundation-core-domain/models";
import { type FSDataTable, type FSDataTableColumn } from "@dative-gpi/foundation-shared-components/models";

export const useDataTables = () => {
  const initialized = ref(false);

  const table = ref<FSDataTable>({
    headers: [],
    mode: "iterator",
    sortBy: null,
    rowsPerPage: 10,
    filters: {},
    page: 1
  });

  const computeTable = ((headersOptions: { [key: string]: Partial<FSDataTableColumn> }) => ({
    ...table.value,
    headers: table.value.headers.map(header => ({
      ...header,
      fixedFilters: (header.value && headersOptions[header.value] && headersOptions[header.value].fixedFilters) || null,
      methodFilter: (header.value && headersOptions[header.value] && headersOptions[header.value].methodFilter) || null,
      sort: (header.value && headersOptions[header.value] && headersOptions[header.value].sort) || null,
      sortRaw: (header.value && headersOptions[header.value] && headersOptions[header.value].sortRaw) || null ,
      innerValue: (header.value && headersOptions[header.value] && headersOptions[header.value].innerValue) || null 
    }))
  }));

  const updateTable = (
    updateUserOrganisationTable: (id: string, payload: UpdateUserOrganisationTableDTO) => Promise<Ref<UserOrganisationTableDetails>>,
    setTable: (tableCode: string, value: FSDataTable) => void,
    tableCode: string
  ): void => {
    if (table.value) {
      setTable(tableCode, table.value);
      updateUserOrganisationTable(tableCode, {
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

  const onTableCodeChange = async (
    getUserOrganisationTable: (id: string) => Promise<Ref<UserOrganisationTableDetails | null>>,
    getTable: (tableCode: string) => FSDataTable | null,
    tableCode: string
  ): Promise<void> => {
    if (tableCode) {
      const composableTable = getTable(tableCode);
      if (composableTable) {
        table.value = composableTable;
      }
      else {
        try {
          const userOrganisationTable = await getUserOrganisationTable(tableCode);
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
        catch {
          // Do nothing
        }
      }
    }
    initialized.value = true;
  };

  return {
    initialized,
    table,
    onTableCodeChange,
    computeTable,
    updateTable
  };
};