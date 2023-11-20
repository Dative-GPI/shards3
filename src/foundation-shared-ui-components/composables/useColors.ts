import { useTheme } from "vuetify";
import * as Color from "color";

import { ColorBase } from "@dative-gpi/foundation-shared-ui-domain";

export const useColors = () => {
    const theme = useTheme().current.value;
    const textLight = Color(theme.colors[ColorBase.TextLight]);

    const getButtonVariants = (background: ColorBase, border: ColorBase, text: ColorBase) => {
        return {
            backgroundBase: theme.colors[background],
            backgroundHover: Color(theme.colors[background]).darken(0.1).hex(),
            backgroundActive: Color(theme.colors[background]).darken(0.2).hex(),
            border: theme.colors[border],
            textBase: theme.colors[text],
            textHover: Color(theme.colors[background]).darken(0.1).contrast(textLight) > Color(theme.colors[background]).darken(0.1).contrast(Color(theme.colors[text]).darken(0.1)) ?
                textLight.hex() : theme.colors[text],
            textActive: Color(theme.colors[background]).darken(0.2).contrast(textLight) > Color(theme.colors[background]).darken(0.2).contrast(Color(theme.colors[text]).darken(0.1)) ?
                textLight.hex() : theme.colors[text],
        }
    };

    return {
        getButtonVariants
    };
}
