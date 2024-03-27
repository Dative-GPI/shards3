import { computed } from "vue";

import { useAppLanguageCode, useAppTimeZone } from "./app";

export function useFoundationShared() {
  const { ready: languageCodeReady } = useAppLanguageCode();
  const { ready: timeZoneReady } = useAppTimeZone();

  const ready = computed(() => timeZoneReady.value && languageCodeReady.value);

  return {
    ready,
  };
}