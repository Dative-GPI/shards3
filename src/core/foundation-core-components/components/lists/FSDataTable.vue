<template>
  <FSLoadDataTable
    v-if="getting"
  />
  <FSDataTableUI
    v-else
    :headers="innerHeaders"
    :mode="innerMode"
    :sortBy="innerSortBy"
    :rowsPerPage="innerRowsPerPage"
    :filters="innerFilters"
    :page="innerPage"
    @update:headers="updateHeaders"
    @update:mode="updateMode"
    @update:sortBy="updateSortBy"
    @update:rowsPerPage="updateRowsPerPage"
    @update:filters="updateFilters"
    @update:page="updatePage"
    v-bind="$attrs"
  >
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </FSDataTableUI>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, Ref, watch } from "vue";
import { useRouter } from "vue-router";

import { useUserOrganisationTable, useUpdateUserOrganisationTable } from "@dative-gpi/foundation-core-services/composables";
import { FSDataTableColumn, FSDataTableFilter, FSDataTableOrder } from "@dative-gpi/foundation-shared-components/models";
import { useDebounce } from "@dative-gpi/foundation-shared-components/composables";

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
    }
  },
  setup(props) {
    const { get, getting, entity } = useUserOrganisationTable();
    const { update } = useUpdateUserOrganisationTable();
    const { debounce, cancel } = useDebounce();
    const router = useRouter();

    const innerHeaders: Ref<FSDataTableColumn[]> = ref([]);
    const innerSortBy: Ref<FSDataTableOrder | null> = ref(null);
    const innerMode: Ref<"table" | "iterator"> = ref("table");
    const innerRowsPerPage = ref(10);
    const innerFilters = ref<{ [key: string]: FSDataTableFilter[] }>({});
    const innerPage = ref(1);

    const reset = (): void => {
      if (router && router.currentRoute.value.query[props.tableCode]) {
        const query = JSON.parse(router.currentRoute.value.query[props.tableCode] as string);
        innerHeaders.value = query.columns;
        innerRowsPerPage.value = query.rowsPerPage;
        innerSortBy.value = query.sortByKey ? {
          key: query.sortByKey,
          order: query.sortByOrder
        } : null;
        innerMode.value = query.mode;
        innerFilters.value = query.filters;
        innerPage.value = query.page;
      }
      else {
        innerHeaders.value = entity.value.columns;
        innerRowsPerPage.value = entity.value.rowsPerPage;
        innerSortBy.value = entity.value.sortByKey ? {
          key: entity.value.sortByKey,
          order: entity.value.sortByOrder
        } : null;
        innerMode.value = entity.value.mode;
      }
    };

    const updateHeaders = (value: FSDataTableColumn[]): void => {
      innerHeaders.value = value;
      debounce(updateTable, 5000);
    };

    const updateMode = (value: "table" | "iterator"): void => {
      innerMode.value = value;
      debounce(updateTable, 5000);
    };

    const updateSortBy = (value: FSDataTableOrder | null): void => {
      innerSortBy.value = value;
      debounce(updateTable, 5000);
    };

    const updateRowsPerPage = (value: -1 | 10 | 30): void => {
      innerRowsPerPage.value = value;
      debounce(updateTable, 5000);
    };

    const updateFilters = (value: { [key: string]: FSDataTableFilter[] }): void => {
      innerFilters.value = value;
      updateRouter();
    };

    const updatePage = (value: number): void => {
      innerPage.value = value;
      updateRouter();
    };

    const updateTable = (): void => {
      updateRouter();
      update(props.tableCode, {
        columns: innerHeaders.value.map(column => ({
          columnId: column.columnId,
          hidden: column.hidden,
          index: column.index
        })),
        rowsPerPage: innerRowsPerPage.value,
        sortByKey: innerSortBy.value?.key,
        sortByOrder: innerSortBy.value?.order,
        mode: innerMode.value
      });
    };

    const updateRouter = (): void => {
      if (router) {
        router.replace({
          query: {
            ...router.currentRoute.value.query,
            [props.tableCode]: JSON.stringify({
              columns: innerHeaders.value,
              rowsPerPage: innerRowsPerPage.value,
              sortByKey: innerSortBy.value?.key,
              sortByOrder: innerSortBy.value?.order,
              mode: innerMode.value,
              filters: innerFilters.value,
              page: innerPage.value
            })
          }
        });
      }
    };

    onMounted(() => {
      get(props.tableCode);
    });

    onUnmounted(() => {
      cancel();
      updateTable();
    });

    watch(() => props.tableCode, () => {
      get(props.tableCode);
    });

    watch(entity, () => {
      reset();
    });

    return {
      getting,
      innerHeaders,
      innerRowsPerPage,
      innerSortBy,
      innerMode,
      innerFilters,
      innerPage,
      updateHeaders,
      updateMode,
      updateSortBy,
      updateRowsPerPage,
      updateFilters,
      updatePage
    };
  },
});
</script>