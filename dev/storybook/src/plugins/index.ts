/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";

// Types
import type { App } from "vue";

import { ColorPlugin } from "@dative-gpi/foundation-shared-components/plugins";

import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services";
import { TranslationPlugin } from "@dative-gpi/bones-ui";

export function registerPlugins (app: App) {
  loadFonts();
  app
    .use(vuetify)
    .use(ColorPlugin)
    .use(TranslationPlugin, { translationsProvider: useTranslationsProvider() });
}
