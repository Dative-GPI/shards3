import type { UpdateUserOrganisationTableDTO, UserOrganisationTableDetails } from "@/core/foundation-core-domain/models";
import type { FSDataTable } from "@/shared/foundation-shared-components/models";
import type { Ref} from "vue";
import { ref } from "vue";

export const useDataTables = () => {
  const initialized = ref(false);

  const table = ref<FSDataTable>({
    headers: [],
    mode: "table",
    sortBy: null,
    rowsPerPage: 10,
    filters: {},
    page: 1
  });

  const computeTable = ((customSorts: { [key: string]: any }, customSortRaws: { [key: string]: any }) => ({
    ...table.value,
    headers: table.value.headers.map(header => ({
      ...header,
      sort: header.value && customSorts[header.value] || null,
      sortRaw: header.value && customSortRaws[header.value] || null 
    }))
  }));

  const updateTable = (
      updateUserOrganisationTable: (id: string, payload: UpdateUserOrganisationTableDTO) => Promise<Ref<UserOrganisationTableDetails>>,
      setTable: (tableCode: string, value: FSDataTable) => void,
      tableCode: string)
    : void => {
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
      tableCode: string)
    : Promise<void> => {
      if (tableCode) {
        const composableTable = getTable(tableCode);
        if (composableTable) {
          table.value = composableTable;
        }
        else {
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
      }
      initialized.value = true;
  };

  return {
    initialized,
    table,
    updateTable,
    computeTable,
    onTableCodeChange
  }
}
