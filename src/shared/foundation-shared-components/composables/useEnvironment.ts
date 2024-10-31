import { computed } from 'vue';

export const useEnvironment = () => {
  const isExtension = computed(() => {
    return window.self !== window.top;
  });

  return { isExtension };
}