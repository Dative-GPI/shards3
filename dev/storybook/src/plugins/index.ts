/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'

// Types
import type { App } from 'vue'

import { ColorPlugin } from "../../../../src/shared/foundation-shared-components/plugins/colorPlugin";

export function registerPlugins (app: App) {
  loadFonts();
  app.use(vuetify).use(ColorPlugin);
}
