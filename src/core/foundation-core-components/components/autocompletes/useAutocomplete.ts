import { Ref, ref, watch } from "vue"

import { useDebounce } from "@dative-gpi/foundation-shared-components/composables"

export const useAutocomplete = <TInfos extends { id: string }>(
  entities: Ref<TInfos[]>,
  fetch: (search: string | null) => Promise<any>,
  emit: (event: "update:modelValue", value: string[] | string | null) => void,
  toText: (item: TInfos) => string | null = (item: TInfos) => (item as any).label,
  customUpdate: ((item: TInfos[] | TInfos | null) => void) | null = null,
  debounceInterval: number = 300
) => {

  const search = ref<string | null>(null);
  const { debounce } = useDebounce();

  const debouncedFetch = () => debounce(() => fetch(search.value), debounceInterval);

  const onUpdate = (value: string[] | string | null) => {
    if (customUpdate) {
      if (Array.isArray(value)) {
        const items = value.map(v => entities.value.find(e => e.id === v) || null).filter(e => e !== null) as TInfos[];
        customUpdate(items)
      }
      else {
        customUpdate((value && entities.value.find(e => e.id === value)) || null)
      }
    }
    else {
      emit("update:modelValue", value);
    }
  }

  watch(search, (newValue, oldValue) => {
    if (newValue !== oldValue) {
      const founded = entities.value.map(e => toText(e)).indexOf(search.value);
      if (founded !== -1) {
        // emit ?
      }
      else if (!search.value || !search.value.length || search.value.length > 2) {
        debouncedFetch();
      }
    }
  })


  return {
    search,
    fetch: debouncedFetch,
    onUpdate
  }
}