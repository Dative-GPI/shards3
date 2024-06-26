/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";
import router from "./router";

// Types
import type { App } from "vue";

import { ColorPlugin, MapsPlugin } from "@dative-gpi/foundation-shared-components/plugins";

import { TranslationPlugin } from "@dative-gpi/bones-ui";

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(ColorPlugin)
    .use(MapsPlugin)
    .use(TranslationPlugin);
}
