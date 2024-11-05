import { computed, ref } from "vue";

const host = ref<string | undefined>(undefined);

export const useAppHost = () => {
  const setAppHost = (payload: string) => {
    host.value = payload;
  };

  const ready = computed(() => host.value !== null);

  return {
    host,
    ready,
    setAppHost
  };
}