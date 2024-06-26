import { ref } from "vue";

import { Single } from "@dative-gpi/foundation-shared-domain/tools/single";

import type { FSDataTable } from "../models";

const tables = ref<{ [key: string]: FSDataTable }>({});

const single = new Single();

export const useTables = () => {
  return single.call(() => {
    const getTable = (tableCode: string): FSDataTable | null => {
      if (tables.value[tableCode] != null) {
        return tables.value[tableCode];
      }
      return null;
    };

    const setTable = (tableCode: string, value: FSDataTable) => {
      tables.value[tableCode] = { ...value };
    };

    return {
      getTable,
      setTable
    };
  });
};