
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

import "../../../../src/foundation-shared-ui-components/styles/main.css";

import { DefaultTheme } from "../../../../src/foundation-shared-ui-components/themes";
import { FSButtonsAliases, FSButtonsProps } from "../../../../src/foundation-shared-ui-components/defaults/FSButtons";

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
