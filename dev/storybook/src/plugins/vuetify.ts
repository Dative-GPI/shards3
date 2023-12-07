
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

import "../../../../src/shared/foundation-shared-components/styles/main.css";

import { DefaultTheme } from "../../../../src/shared/foundation-shared-components/themes";
import { FSButtonsAliases, FSButtonsProps } from "../../../../src/shared/foundation-shared-components/defaults/FSButtons";

export default createVuetify({
  theme: {
    defaultTheme: "DefaultTheme",
    themes: {
      DefaultTheme
    }
  },
  aliases: {
    ...FSButtonsAliases
  },
  defaults: {
    ...FSButtonsProps
  }
});
