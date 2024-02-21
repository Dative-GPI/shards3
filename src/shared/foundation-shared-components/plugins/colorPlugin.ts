import { DefineComponent, Plugin } from "vue";
import { useTheme } from "vuetify";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export const ColorPlugin: Plugin = {
    install: (app) => {
        app.config.globalProperties.$color = function(this: InstanceType<DefineComponent>, key: ColorBase): string {
            const theme = this.$vuetify ? (this.$vuetify as any).theme.current : useTheme().current.value;
            return theme.colors[key] ?? key;
        }
    }
}