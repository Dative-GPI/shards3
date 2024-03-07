import { onMounted, ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import { useTranslations } from "./services/useTranslations";
import { useLanguageCode } from "./useLanguageCode";
import { useTimeZone } from "./useTimeZone";

let called = false;

const ready = ref(false);

export function useShared() {
  if (called) {
    return {
      ready
    };
  }

  called = true;

  const { ready: languageCodeReady, languageCode } = useLanguageCode();
  const { ready: timeZoneReady } = useTimeZone();
  const { getMany, entities } = useTranslations();
  const { set } = useTranslationsProvider();

  onMounted(async () => {
    await languageCodeReady
    await timeZoneReady;
    if (languageCode.value) {
      await getMany(languageCode.value!);
      set(entities.value.map(t => ({ code: t.code, value: t.value })));
    }
    ready.value = true;
  });

  return {
    ready
  };
}