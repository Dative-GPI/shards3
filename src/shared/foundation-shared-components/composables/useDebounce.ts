import type { Ref } from "vue";
import { ref } from "vue";

export const useDebounce = () => {
  const timeOutId: Ref<any> = ref(null);

  const debounce = (callback: Function, wait: number, ...args: any[]): void => {
    cancel();
    timeOutId.value = setTimeout(() => callback(...args), wait);
  };

  const cancel = (): void => {
    if (timeOutId.value) {
      clearTimeout(timeOutId.value);
      timeOutId.value = null;
    }
  };

  return {
    debounce,
    cancel
  };
}