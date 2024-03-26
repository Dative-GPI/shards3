import { ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import { useTranslations } from "./services/useTranslations";
import { useLanguageCode } from "./useLanguageCode";
import { useTimeZone } from "./useTimeZone";

let called = false;

const ready = ref(false);

export async function useShared() {
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

  console.log("useShared called");

  await languageCodeReady;
  await timeZoneReady;

  console.log("languageCodeReady and timeZoneReady");

  if (languageCode.value) {

    console.log("languageCode.value", languageCode.value);

    await getMany(languageCode.value);

    console.log("entities.value", entities.value);
    
    set(entities.value.map(t => ({ code: t.code, value: t.value })));
  }
  ready.value = true;

  return {
    ready
  };
}