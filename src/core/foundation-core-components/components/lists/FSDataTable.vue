<template>
  <FSDataTableUI
    v-if="!getting"
    :filters="getFilters()"
    :page="innerPage"
    @update:filters="updateFilters"
    @update:page="updatePage"
    v-model:rowsPerPage="innerRowsPerPage"
    v-model:headers="innerHeaders"
    v-model:sortBy="innerSortBy"
    v-model:page="innerPage"
    v-model:mode="innerMode"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, Ref, watch } from "vue";
import { useRouter } from "vue-router";

import { ColumnInfos, TableFilter, TableOrder } from "@dative-gpi/foundation-core-domain/models";
import { useTable, useUpdateTable } from "@dative-gpi/foundation-core-services/composables";
import { FSDataTableFilter } from "@dative-gpi/foundation-shared-components/models";
import { useDebounce } from "@dative-gpi/foundation-shared-components/composables";

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
    }
  },
  setup(props) {
    const { get, getting, entity } = useTable();
    const { debounce, cancel } = useDebounce();
    const { update } = useUpdateTable();
    const router = useRouter();

    const innerHeaders: Ref<ColumnInfos[]> = ref([]);
    const innerRowsPerPage = ref(10);
    const innerSortBy: Ref<TableOrder | null> = ref(null);
    const innerMode: Ref<"table" | "iterator"> = ref("table");
    const innerFilters = ref<TableFilter[]>([]);
    const innerPage = ref(1);

    const getFilters = (): { [key: string]: FSDataTableFilter[] } => {
      return innerFilters.value.reduce((acc, filter) => {
        if (!acc[filter.key]) {
          acc[filter.key] = [];
        }
        acc[filter.key].push({ value: filter.value, hidden: filter.hidden });
        return acc;
      }, {});
    };

    const updateFilters = (value: { [key: string]: FSDataTableFilter[] }): void => {
      innerFilters.value = Object.entries(value).map(([key, filters]) => filters.map((filter) => ({
        key: key,
        value: filter.value,
        hidden: filter.hidden
      }))).reduce((acc, filters) => acc.concat(filters), []);
      updateRouter();
    };

    const updatePage = (value: number): void => {
      innerPage.value = value;
      debounce(updateTable, 5000);
    };

    const updateTable = (): void => {
      updateRouter();
      update(props.tableCode, {
        columns: innerHeaders.value,
        rowsPerPage: innerRowsPerPage.value,
        sortBy: innerSortBy.value,
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
              sortBy: innerSortBy.value,
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