/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";

// Types
import type { App } from "vue";

import { ColorPlugin } from "@dative-gpi/foundation-shared-components/plugins";

import { TranslationPlugin } from "@dative-gpi/bones-ui";

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(ColorPlugin)
    .use(TranslationPlugin);
}
