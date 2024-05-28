<template>
  <FSLoadDataTable
    v-if="gettingUserOrganisationTable"
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
import { defineComponent, onUnmounted, ref, Ref, watch } from "vue";
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
    const { debounce, cancel } = useDebounce();
    const router = useRouter();

    const innerHeaders: Ref<FSDataTableColumn[]> = ref([]);
    const innerSortBy: Ref<FSDataTableOrder | null> = ref(null);
    const innerMode: Ref<"table" | "iterator"> = ref("table");
    const innerRowsPerPage = ref(10);

    const innerFilters = ref<{ [key: string]: FSDataTableFilter[] }>({});
    const innerPage = ref(1);

    const reset = (): void => {
      if (router && router.currentRoute.value.meta[props.tableCode]) {
        const meta = router.currentRoute.value.meta[props.tableCode] as any;
        innerHeaders.value = meta.columns;
        innerRowsPerPage.value = meta.rowsPerPage;
        innerSortBy.value = meta.sortBy;
        innerMode.value = meta.mode;
        
        innerFilters.value = meta.filters;
        innerPage.value = meta.page;
      }
      else if (userOrganisationTable.value) {
        innerHeaders.value = userOrganisationTable.value.columns;
        innerRowsPerPage.value = userOrganisationTable.value.rowsPerPage;
        if (userOrganisationTable.value.sortByKey && userOrganisationTable.value.sortByOrder) {
          innerSortBy.value = {
            key: userOrganisationTable.value.sortByKey,
            order: userOrganisationTable.value.sortByOrder
          };
        }
        innerMode.value = userOrganisationTable.value.mode;
      }
    };

    const updateHeaders = (value: FSDataTableColumn[]): void => {
      innerHeaders.value = value;
      debounce(updateTable, props.debounceTime);
    };

    const updateMode = (value: "table" | "iterator"): void => {
      innerMode.value = value;
      debounce(updateTable, props.debounceTime);
    };

    const updateSortBy = (value: FSDataTableOrder | null): void => {
      innerSortBy.value = value;
      debounce(updateTable, props.debounceTime);
    };

    const updateRowsPerPage = (value: -1 | 10 | 30): void => {
      innerRowsPerPage.value = value;
      debounce(updateTable, props.debounceTime);
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
      updateUserOrganisationTable(props.tableCode, {
        columns: innerHeaders.value.map(column => ({
          columnId: column.columnId,
          hidden: column.hidden,
          index: column.index
        })),
        rowsPerPage: innerRowsPerPage.value,
        sortByKey: innerSortBy.value?.key ?? null,
        sortByOrder: innerSortBy.value?.order ?? null,
        mode: innerMode.value
      });
    };

    const updateRouter = (): void => {
      if (router) {
        router.currentRoute.value.meta = {
          ...router.currentRoute.value.meta,
          [props.tableCode]: {
            columns: innerHeaders.value,
            filters: innerFilters.value,
            rowsPerPage: innerRowsPerPage.value,
            sortBy: innerSortBy.value,
            mode: innerMode.value,
            page: innerPage.value
          }
        };
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
      innerRowsPerPage,
      innerFilters,
      innerHeaders,
      innerSortBy,
      innerMode,
      innerPage,
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