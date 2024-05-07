import { computed, onMounted, ref, Ref, watch } from "vue";
import _ from "lodash";

import { useDebounce } from "./useDebounce";

export const useAutocomplete = <TInfos>(
  entities: Ref<TInfos[]>,
  filters: (() => any)[],
  emit: (event: "update:modelValue", value: string[] | string | null) => void,
  customFetch: (search: string) => Promise<any>,
  customUpdate: ((item: TInfos[] | TInfos | null) => void) | null = null,
  toId: (item: TInfos) => string | null = (item: TInfos) => (item as any).id,
  toText: (item: TInfos) => string | null = (item: TInfos) => (item as any).label,
  fetchOnSearch: boolean = false,
  allowToggleSet: boolean = true,
  breakpointToggleSet: number = 5,
  debounceInterval: number = 1000
) => {
  const { debounce } = useDebounce();

  const search = ref<string>("");
  const entitiesLength = ref(0);
  const init = ref(true);

  const toggleSet = computed((): boolean => {
    return allowToggleSet && entitiesLength.value <= breakpointToggleSet;
  });

  const debouncedFetch = () => debounce(() => customFetch(search.value), debounceInterval);

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

  watch(search, (newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (fetchOnSearch) {
        const found = entities.value.map(e => toText(e)).includes(search.value);
        if (!found && (!search.value || !search.value.length || search.value.length > 2)) {
          debouncedFetch();
        }
      }
    }
  });
  
  watch(entities, () => {
    if (init.value) {
      init.value = false;
      entitiesLength.value = entities.value.length;
    }
  });

  onMounted((): void => {
    customFetch(search.value);
  });

  return {
    toggleSet,
    search,
    init,
    onUpdate
  };
}