import type { Ref} from "vue";
import { onMounted, watch } from "vue";
import _ from "lodash";

import { useDebounce } from "./useDebounce";

export const useTreeView = <TInfos>(
  entities: Ref<TInfos[]>,
  filters: (() => any)[],
  emit: (event: "update:modelValue", value: string[] | string | null) => void,
  customFetch: () => Promise<any>,
  customUpdate: ((item: TInfos[] | TInfos | null) => void) | null = null,
  toId: (item: TInfos) => string | null = (item: TInfos) => (item as any).id,
  debounceInterval: number = 1000
) => {
  const { debounce } = useDebounce();

  const debouncedFetch = () => debounce(customFetch, debounceInterval);

  const onUpdate = (value: string[] | string | null) => {
    if (customUpdate) {
      if (Array.isArray(value)) {
        const items = value.map(v => entities.value.find(e => toId(e) === v) || null).filter(e => e !== null) as TInfos[];
        customUpdate(items);
      }
      else {
        customUpdate((value && entities.value.find(e => toId(e) === value)) || null);
      }
    }
    else {
      emit("update:modelValue", value);
    }
  };

  watch(filters, (newValue, oldValue) => {
    if (!_.isEqual(newValue, oldValue)) {
      debouncedFetch();
    }
  });

  onMounted((): void => {
    customFetch();
  });

  return {
    onUpdate
  };
}