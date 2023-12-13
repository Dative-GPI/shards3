
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

import "@dative-gpi/foundation-shared-components/styles/main.scss";

import { DefaultTheme } from "@dative-gpi/foundation-shared-components/themes";
import { FSButtonsAliases, FSButtonsProps } from "@dative-gpi/foundation-shared-components/defaults/FSButtons";

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
